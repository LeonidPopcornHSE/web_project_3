import { WeatherProvider } from './contexts/WeatherContext';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherIcon from './components/WeatherIcon';
import Forecast from './components/Forecast';
import UnitToggle from './components/UnitToggle';
import './App.css';

function App() {
  return (
    <WeatherProvider>
      <div className="app">
        <h1>Weather Forecast</h1>
        <SearchBar />
        <UnitToggle />
        <WeatherCard />
        <WeatherIcon />
        <Forecast />
      </div>
    </WeatherProvider>
  );
}

export default App;
