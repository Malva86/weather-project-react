import React, { useState } from "react";
import Icon from "./Icon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loading, setLoading] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoading(true);
  }

  if (loading) {
    return (
      <div className="Forecast">
        <div className="row one">
          <div className="col">
            <div className="forDay">
              <strong>Mon</strong>
            </div>
            <div className="forIcon">
              <Icon code="01d" size={45} />
            </div>
            <div className="forTemp">
              <span className="forTempMax">{forecastData[0].temp.max}°C</span>|
              <span className="forTempMin">{forecastData[0].temp.min}°C</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "2ccd0b222740682aa1676f3991d1e789";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
