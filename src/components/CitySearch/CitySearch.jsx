import { useState } from "react";
import { useWeatherContext } from "../../context/WeatherContext";
import "./CitySearch.css";

function CitySearch() {
  const [inputValue, setInputValue] = useState("");
  const { changeCity } = useWeatherContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      changeCity(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="city-search">
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            id="city-search"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="white-text"
            placeholder="Rechercher une ville..."
          />
          <button type="submit" className="btn waves-effect waves-light">
            <i className="material-icons">search</i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CitySearch;
