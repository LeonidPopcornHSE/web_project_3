import { createContext, useState } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('celsius');

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
      );
      const data = await response.json();
      
      if (data.cod !== 200) throw new Error(data.message);
      
      setWeather(data);
      await fetchForecast(data.coord.lat, data.coord.lon);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather');
    } finally {
      setLoading(false);
    }
  };

  const fetchForecast = async (lat, lon) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
    );
    const data = await response.json();
    setForecast(data.list.slice(0, 5));
  };

  const toggleUnit = () => {
    setUnit(unit === 'celsius' ? 'fahrenheit' : 'celsius');
  };

  return (
    <WeatherContext.Provider 
      value={{ 
        weather, 
        forecast, 
        loading, 
        error, 
        unit,
        fetchWeather,
        toggleUnit
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};