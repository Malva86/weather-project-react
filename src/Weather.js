import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [redy, setRedy] = useState(false);
  const [forecast, setForecast] = useState({});
  function handleResponse(response) {
    setForecast({
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humi: response.data.main.humidity,
      desc: response.data.weather[0].main,
      icon: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      date: "Sunday 10:00",
    });

    setRedy(true);
  }

  if (redy) {
    return (
      <div className="WeatherApp">
        <form>
          <div className="row">
            <div className="col-md-8">
              <input type="search" placeholder="Type a city..." />
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
              <li className="Time">{forecast.date}</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5 className="Desc">
              <strong>{forecast.desc}</strong>
            </h5>
          </div>
        </div>
        <div className="row Condition">
          <div className="col-md-6">
            <img src={forecast.icon} alt="Icon" />
          </div>
          <div className="col-md-6">
            <ul>
              <li className="Temp">
                <strong>{Math.round(forecast.temp)}°C</strong>
              </li>
              <li className="Wind">💨 {Math.round(forecast.wind)} km/h</li>
              <li className="Humidity">💦 {forecast.humi}%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f4694dab77f16eded26a08442f7ba9ab";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.startCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
