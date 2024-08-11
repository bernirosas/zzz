from kfp import dsl


@dsl.container_component
def ingestor(
    input_path: str,
    station_id: int,
    metadata_output_path: str,
    daily_temp_history_output_path: str,
) -> dsl.ContainerSpec:
    return dsl.ContainerSpec(
        image="msmendoza/hw-ingestor:latest",
        command=["python", "command.py"],
        args=[
            "--input-path",
            input_path,
            "--station-id",
            station_id,
            "--metadata-output-path",
            metadata_output_path,
            "--daily-temp-history-output-path",
            daily_temp_history_output_path,
        ],
    )
