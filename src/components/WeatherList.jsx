import React from 'react';

// Component to dynamically render a group of elements (weather data for each city)
function WeatherList({ data }) {
  return (
    <div className="weather-list">
      {data.map((item, index) => (
        <div key={index} className="weather-item">
          <h3>{item.city_name}</h3>
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
