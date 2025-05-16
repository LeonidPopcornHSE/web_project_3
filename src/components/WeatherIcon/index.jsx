import { useWeather } from '../../hooks/useWeather';
import styles from './styles.module.css';

const WeatherIcon = () => {
  const { weather } = useWeather();
  
  if (!weather) return null;

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className={styles.iconContainer}>
      <img 
        src={iconUrl} 
        alt={weather.weather[0].description} 
        className={styles.icon}
      />
      <p className={styles.description}>
        {weather.weather[0].description}
      </p>
    </div>
  );
};

export default WeatherIcon;