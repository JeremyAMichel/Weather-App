import { useWeatherContext } from "../../context/WeatherContext";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import WeatherDays from "./WeatherDays/WeatherDays";
import "./WeatherCard.css";

function WeatherCard() {
  const { weatherData, loading, error } = useWeatherContext();

  if (loading) {
    return (
      <div className="weather card blue-grey darken-1">
        <div className="card-content white-text">
          <p>Chargement des données météo...</p>
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather card red darken-4">
        <div className="card-content white-text">
          <span className="card-title">Erreur</span>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!weatherData) {
    return null;
  }

  return (
    <div className="weather card blue-grey darken-1">
      <WeatherInfo
        city={weatherData.city}
        temperature={weatherData.temperature}
        icon={weatherData.icon}
        conditionText={weatherData.conditionText}
        wind={weatherData.wind}
      />
      <WeatherDays days={weatherData.days} />
    </div>
  );
}

export default WeatherCard;
