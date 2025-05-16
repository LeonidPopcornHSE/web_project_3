import { useState } from 'react';
import { useWeather } from '../../hooks/useWeather';
import styles from './styles.module.css';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const { fetchWeather } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeather(city);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;