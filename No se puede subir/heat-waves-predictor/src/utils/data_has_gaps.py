import pandas as pd


def data_has_gaps(data: pd.DataFrame) -> bool:
    """Checks whether the data has gaps in the period 1981-2010. 'data' dataframe should
    have a 'max_temp' column.

    Parameters
    ----------
    max_temp : pd.DataFrame
        Dataframe with the maximum temperature data.

    Returns
    -------
    bool
        False if the data has no gaps, True otherwise.
    """
    start_year, end_year = 1981, 2010
    data = data.dropna(subset=["max_temp"])[["max_temp"]]
    data = data[
        (start_year <= data.index.year)
        & (data.index.year <= end_year)
        & (data.index.day == 1)
        & (data.index.month == 1)
    ]

    return len(data) != (end_year - start_year + 1)
