import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°C`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°C`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forDay">
        <strong>{day()}</strong>
      </div>
      <div className="forIcon">
        <Icon code={props.data.weather[0].icon} size={45} />
      </div>
      <div className="forTemp">
        <span className="forTempMax">{maxTemp()}</span>|
        <span className="forTempMin">{minTemp()}</span>
      </div>
    </div>
  );
}
