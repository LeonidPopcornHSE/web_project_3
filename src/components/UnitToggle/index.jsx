import { useWeather } from '../../hooks/useWeather';
import styles from './styles.module.css';

const UnitToggle = () => {
  const { unit, toggleUnit } = useWeather();

  return (
    <button onClick={toggleUnit} className={styles.toggleButton}>
      Switch to {unit === 'celsius' ? 'Fahrenheit' : 'Celsius'}
    </button>
  );
};

export default UnitToggle;