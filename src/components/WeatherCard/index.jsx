import { useWeather } from '../../hooks/useWeather';
import styles from './styles.module.css';

const WeatherCard = () => {
  const { weather, loading, error, unit } = useWeather();

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!weather) return null;

  const temp = unit === 'celsius' 
    ? Math.round(weather.main.temp)
    : Math.round((weather.main.temp * 9/5) + 32);

  return (
    <div className={styles.card}>
      <h2>{weather.name}, {weather.sys.country}</h2>
      <div className={styles.temp}>
        {temp}°{unit === 'celsius' ? 'C' : 'F'}
      </div>
      <div className={styles.details}>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;