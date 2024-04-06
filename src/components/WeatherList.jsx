// This component renders the list of cities with clickable links to the detail view
import React from 'react';
import { Link } from 'react-router-dom';

function WeatherList({ data }) {
  return (
    <div className="weather-list">
      {data.map((item, index) => (
        <div key={index} className="weather-item">
          <Link to={`/city/${item.city_name}`}>
            <h3>{item.city_name}</h3>
          </Link>
          <p><strong>Temperature:</strong> {item.temp}°C</p>
          <p><strong>Weather:</strong> {item.weather.description}</p>
          <p><strong>Humidity:</strong> {item.rh}%</p>
          <p><strong>Wind Speed:</strong> {item.wind_spd} m/s</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherList;
