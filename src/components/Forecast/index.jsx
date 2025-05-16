import { useWeather } from '../../hooks/useWeather';
import styles from './styles.module.css';

const Forecast = () => {
  const { forecast, unit } = useWeather();

  if (!forecast || forecast.length === 0) return null;

  return (
    <div className={styles.forecast}>
      <h3>5-Day Forecast</h3>
      <div className={styles.forecastItems}>
        {forecast.map((item, index) => {
          const temp = unit === 'celsius' 
            ? Math.round(item.main.temp)
            : Math.round((item.main.temp * 9/5) + 32);
            
          return (
            <div key={index} className={styles.forecastItem}>
              <p>{new Date(item.dt * 1000).toLocaleDateString('en', { weekday: 'short' })}</p>
              <img 
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} 
                alt={item.weather[0].description}
              />
              <p>{temp}°{unit === 'celsius' ? 'C' : 'F'}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;