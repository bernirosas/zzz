import sys
from datetime import datetime
from warnings import simplefilter

from kfp import client
from loguru import logger
from pytz import timezone
from utils import build_pipeline, load_config_file


if __name__ == "__main__":
    simplefilter(action="ignore", category=FutureWarning)  # ignore KFP FutureWarning

    env = sys.argv[1]
    cfg = load_config_file("src/pipeline/config.ini", env)

    logger.info("submitting pipeline...")
    build_pipeline(
        name=cfg["pipeline_name"],
        description=cfg["pipeline_description"],
        pipeline_root=cfg["pipeline_root"],
        display_name=cfg["display_name"],
    )

    endpoint = "http://localhost:8000"
    kfp_client = client.Client(host=endpoint)
    timestamp = datetime.now().astimezone(timezone("America/Santiago")).strftime("%Y%m%d-%H%M%S")

    kfp_client.create_run_from_pipeline_package(
        pipeline_file=f"{cfg['pipeline_name']}.yaml",
        arguments={
            "input_path": cfg["input_path"],
            "station_id": cfg["station_id"],
            "metadata_output_path": cfg["metadata_output_path"],
            "daily_temp_history_output_path": cfg["daily_temp_history_output_path"],
        },
        run_name=f"{cfg['pipeline_name']}-{timestamp}",
        enable_caching=bool(cfg["pipeline_name"]),
    )
