import logging
from argparse import ArgumentParser
from datetime import date

import ingestor.src as ing


if __name__ == "__main__":
    # logging config to comply with CDS API logs
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s %(levelname)s %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S,   ",
    )

    # parse arguments from command line
    parser = ArgumentParser()
    parser.add_argument(
        "--data-path",
        type=str,
        default="data/input",
        help="Path to data directory.",
    )
    parser.add_argument(
        "--year",
        type=int,
        default=2022,
        help="Year to get data for (e.g. 2022).",
    )

    args = parser.parse_args()

    # get data from CDS
    current_year = date.today().year
    years = [str(y) for y in range(1940, current_year + 1)]
    months = [str(m).zfill(2) for m in range(1, 13)]
    days = [str(d).zfill(2) for d in range(1, 32)]
    time = [f"{str(t).zfill(2)}:00" for t in range(0, 24)]

    req_year = args.year
    request = {
        "product_type": "reanalysis",
        "format": "netcdf",
        "variable": "2m_temperature",
        "year": req_year,
        "month": months,
        "day": days,
        "time": time,
    }

    logging.info(f"Requesting {req_year} data from CDS...")
    ing.era5.get_data(
        ["2m_temperature"],
        "netcdf",
        f"{args.data_path}/era5/{req_year}.nc",
        years=[req_year],
        months=months,
        days=days,
        time=time,
    )
    logging.info("Done!")
