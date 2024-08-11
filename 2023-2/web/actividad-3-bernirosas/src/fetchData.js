

export async function fetchData(latitude, longitude) {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude}%2C${longitude}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c0d955e123mshd90b59b45b776e5p1ca61ajsn9f748fa2b138',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return [response, result];
    } catch (error) {
      console.error(error);
    }
  }

  