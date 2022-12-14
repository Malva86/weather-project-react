import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

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
            <ForecastDay day={forecastData[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "2ccd0b222740682aa1676f3991d1e789";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
