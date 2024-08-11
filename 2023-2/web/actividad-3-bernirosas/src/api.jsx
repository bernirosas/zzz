import React, { useEffect, useState } from 'react';
import './api.css';
import { fetchData } from './fetchData.js';

function WeatherApp() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [respuesta, setRespuesta] = useState();
  const [ informacion, setInformacion] = useState();
  let info;
  const handleFetchData = async () => {
    const data = await fetchData(latitude, longitude);
    const respu = data[0];
    info =  data[1];
    setRespuesta(respu);
    setInformacion(info);
    console.log(info);
    console.log(respu);
  };

  return (
    <div>
      <header>
        <p>Bernardita Paz Rosas Riveros</p>
      </header>
      <div className="titulo">
        <h1>Realtime Weather API</h1>
      </div>
      <div className="flex-box">
        <div className="flex-column">
          <div className="titulo-columna">
            <h2>Parámetros</h2>
          </div>
          <div className='parametro'>
            <p>Latitud</p>
            <input
            type="text"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
          </div>
          <div className='parametro'>
            <p>Longitud</p>
            <input
          type="text"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
          </div>
        </div>
        <div className="flex-column">
          <div className="titulo-columna">
            <h2>Valores retornados</h2>
          </div>
          <div>
            {informacion && Object.keys(informacion['location']).map((key) => (
              <p> {key}: {informacion['location'][key]}</p>
            ))}
            {informacion && 
            <><p> Temperatura mínima: {informacion['current']['temp_c']}</p>
            <p> Sensación térmica mínima: {informacion['current']['feelslike_c']}</p>
            <p> Temperatura máxima: {informacion['current']['temp_f']}</p>
            <p> Sensación térmica máxima: {informacion['current']['feelslike_f']}</p>
            <p> Nubes: {informacion['current']['cloud']}</p>
            <p> Condiciones: {informacion['current']['condition']['text']}</p>
            <p> Humedad: {informacion['current']['humidity']}</p>
            <p> Precipitaciones en mm: {informacion['current']['precip_mm']}</p>
            <p> Presión: {informacion['current']['pressure_mb']} mb</p>
            <p> Velocidad del viento: {informacion['current']['wind_kph']} km/h</p>
            <p> Dirección del viento: {informacion['current']['wind_dir']}</p>
            <p> Grado del viento: {informacion["wind_degree"]}</p>
            <p>Última actualización: {informacion['current']['last_updated']}</p>
            <p>Es de día: {informacion['current']['is_day'] ? 'Sí' : 'No'}</p>
            <p>Visibilidad: {informacion['current']['vis_km']} km / {informacion['current']['vis_miles']} millas</p>
            <p>Índice UV: {informacion['current']['uv']}</p>
            <p>Ráfaga de viento: {informacion['current']['gust_kph']} km/h</p>
            <p>Last date epoch: {informacion['current']["last_updated_epoch"]} </p>
            </>
            }
          </div>
        </div>
      </div>
      <button onClick={handleFetchData} className="boton">Enviar</button>
      {respuesta? (<><div className='body'>
            Body de respuesta:
      </div>
      <div className='respuesta'>
          <p>Status: {respuesta['status']}</p>
          <p>Mensaje: {respuesta['ok']==true? (<>OK</>):(<>Error {respuesta['statusText']}</>)}</p>
          <p>JSON: {JSON.stringify(informacion, null, 2)}</p>
          {/* https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch */}
        </div>

        </>
      ):(null)
      }
      <footer>
        <p>2163730J</p>
      </footer>
    </div>
  );
}

export default WeatherApp;
