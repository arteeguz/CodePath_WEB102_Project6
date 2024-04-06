// This component shows the detailed view for a city with toggleable visualizations
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

function CityDetail() {
  const { cityId } = useParams();
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chartType, setChartType] = useState('line');

  useEffect(() => {
    const fetchCityData = async () => {
      setLoading(true);
      try {
        const forecastUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityId}&key=${import.meta.env.VITE_WEATHER_API_KEY}`;
        const response = await fetch(forecastUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const forecastData = await response.json();
        setCityData(forecastData.data); // forecastData.data should be an array of daily forecasts
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
  
    if (cityId) {
      fetchCityData();
    }
  }, [cityId]);
  

  if (loading) return <div>Loading...</div>;
  if (!cityData) return <div>No data found for {cityId}</div>;

  const chartData = [{ name: 'Now', temp: cityData.temp, humidity: cityData.rh }];

  return (
    <div>
      <h2>Weather Forecast for {cityId}</h2>
      {cityData && cityData.length > 0 ? (
        <>
          <button onClick={() => setChartType('line')}>Line Chart</button>
          <button onClick={() => setChartType('bar')}>Bar Chart</button>
  
          {chartType === 'line' ? (
            <LineChart width={600} height={300} data={cityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="valid_date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          ) : (
            <BarChart width={600} height={300} data={cityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="valid_date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="temp" fill="#8884d8" />
            </BarChart>
          )}
        </>
      ) : (
        <p>No forecast data available.</p>
      )}
    </div>
  );
  
}

export default CityDetail;
