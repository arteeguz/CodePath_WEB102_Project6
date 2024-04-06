// This is your main App component
import React, { useEffect, useState } from 'react';
import WeatherList from './components/WeatherList';
import SearchBar from './components/SearchBar';
import SummaryStatistics from './components/SummaryStatistics';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CityDetail from './components/CityDetail';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const cities = ['Raleigh', 'New York', 'Los Angeles'];
    const fetchAllCities = async () => {
      const responses = await Promise.all(
        cities.map(city =>
          fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${import.meta.env.VITE_WEATHER_API_KEY}`).then(res => res.json())
        )
      );
      setWeatherData(responses.flatMap(data => data.data));
    };

    fetchAllCities();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredData = weatherData.filter(item => item.city_name.toLowerCase().includes(searchTerm));

  return (
    <Router>
      <div className="dark-background">
        <h1>Weather Dashboard</h1>
        <SearchBar onSearch={handleSearch} />
        <SummaryStatistics data={weatherData} />
        <Routes>
          <Route path="/" element={<WeatherList data={filteredData} />} />
          <Route path="/city/:cityId" element={<CityDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
