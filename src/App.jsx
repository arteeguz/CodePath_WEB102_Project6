import React, { useEffect, useState } from 'react';
import WeatherList from './components/WeatherList';
import SearchBar from './components/SearchBar';
import SummaryStatistics from './components/SummaryStatistics';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const cities = ['Raleigh', 'New York', 'Los Angeles'];
    const fetchAllCities = async () => {
      const responses = await Promise.all(
        cities.map(city =>
          fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${process.env.REACT_APP_WEATHER_API_KEY}`).then(res => res.json())
        )
      );
      setWeatherData(responses.flatMap(data => data.data));
    };

    fetchAllCities();
  }, []);

  // Respond to events triggered by user interaction (search input)
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  // Use .filter() to filter data based on user input
  const filteredData = weatherData.filter(item => item.city_name.toLowerCase().includes(searchTerm));

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} /> {/* Search bar for user input */}
      <SummaryStatistics data={weatherData} /> {/* Display summary statistics */}
      <WeatherList data={filteredData} /> {/* List of data using .map() to dynamically render elements */}
    </div>
  );
}

export default App;
