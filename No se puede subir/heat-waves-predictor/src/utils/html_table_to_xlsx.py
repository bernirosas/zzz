import pandas as pd
import requests
from bs4 import BeautifulSoup


def html_table_to_xlsx(
    url: str,
    table_id: str,
    filename: str,
) -> pd.DataFrame:
    """Converts table of given `table_id` from given `url` to an Excel file.

    Parameters
    ----------
    url : str
        URL of the HTML page.
    table_id : str
        ID of the table to be converted.
    filename : str
        Path where to save the generated .xlsx file.
    """
    # send a request to the server to get the HTML
    response = requests.get(url)

    # parse the HTML with BeautifulSoup
    soup = BeautifulSoup(response.text, "html.parser")

    # gGet the table by ID
    table = soup.find(id=table_id)

    # read the table into a pandas DataFrame
    df = (
        pd.read_html(str(table))[0]
        .rename(
            columns={
                "Día": "day",
                "Ene": "Jan",
                "Abr": "Apr",
                "Ago": "Aug",
                "Dic": "Dec",
            }
        )
        .set_index("day", drop=True)
        .rename_axis("month", axis="columns")
    )

    # save the DataFrame to an Excel file
    df.to_excel(filename, index=False)

    return df
