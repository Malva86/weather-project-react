import React, { useState } from "react";
import axios from "axios";
import Time from "./Time";
import Temp from "./Temp";
import Icon from "./Icon";

export default function Weather(props) {
  const [redy, setRedy] = useState(false);
  const [forecast, setForecast] = useState({});
  const [city, setCity] = useState(props.startCity);
  function handleResponse(response) {
    setForecast({
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humi: response.data.main.humidity,
      desc: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });

    setRedy(true);
  }

  function search() {
    const apiKey = "f4694dab77f16eded26a08442f7ba9ab";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function Submit(event) {
    event.preventDefault();
    search();
  }

  function cityChange(event) {
    setCity(event.target.value);
  }

  if (redy) {
    return (
      <div className="WeatherApp">
        <form onSubmit={Submit}>
          <div className="row">
            <div className="col-md-8">
              <input
                type="search"
                placeholder="Type a city..."
                onChange={cityChange}
              />
            </div>
            <div className="col-md-4 SearchButton">
              <input type="submit" value="📌" />
            </div>
          </div>
        </form>

        <div className="row City">
          <div className="col-md-6">
            <ul>
              <li className="CityName">
                <strong>{forecast.city}</strong>
              </li>
              <li className="Time">
                <Time date={forecast.date} />
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5 className="Desc">
              <strong>{forecast.desc}</strong>
            </h5>
          </div>
        </div>

        <div className="row Condition">
          <div className="col-md-6 Icon">
            <Icon code={forecast.icon} />
          </div>
          <div className="col-md-6">
            <ul>
              <li className="Temp">
                <Temp celsius={forecast.temp} />
              </li>
              <li className="Wind">💨 {Math.round(forecast.wind)} km/h</li>
              <li className="Humidity">💦 {forecast.humi}%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
