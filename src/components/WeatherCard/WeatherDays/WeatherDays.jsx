import { useState } from "react";
import "./WeatherDays.css";

function WeatherDays({ days }) {
  const [activeDay, setActiveDay] = useState(0);

  const handleDayClick = (index) => {
    setActiveDay(index);
  };

  return (
    <div className="card-action">
      {days.map((day, index) => (
        <a
          href="#!"
          key={index}
          className={`day-link ${index === activeDay ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleDayClick(index);
          }}
        >
          <div>
            <span className="day-name">{day.name}</span>
            <div className="day-temp">{day.temp}°</div>
            <img
              src={day.icon}
              alt={`Weather for ${day.name}`}
              className="day-icon"
            />
          </div>
        </a>
      ))}
    </div>
  );
}

export default WeatherDays;
