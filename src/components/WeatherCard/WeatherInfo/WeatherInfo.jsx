import "./WeatherInfo.css";

function WeatherInfo({ city, temperature, icon, conditionText, wind }) {
  return (
    <div className="card-content white-text">
      <span className="card-title">{city}</span>
      <p className="weather-condition">{conditionText}</p>
      <div className="weather-icon">
        <img src={icon} alt="Weather icon" />
      </div>
      <span className="temperature">{temperature}°</span>
      <div className="wind">
        Vent {wind.speed} km/h ({wind.direction}°)
      </div>
    </div>
  );
}

export default WeatherInfo;
