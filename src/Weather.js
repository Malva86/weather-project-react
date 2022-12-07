import React from "react";

export default function Weather() {
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
              <strong>Warsaw</strong>
            </li>
            <li className="Time">Sunday 10:00:00</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h5 className="Desc">
            <strong>Rain</strong>
          </h5>
        </div>
      </div>
      <div className="row Condition">
        <div className="col-md-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Icon"
          />
        </div>
        <div className="col-md-6">
          <ul>
            <li className="Temp">
              <strong>12°C</strong>
            </li>
            <li className="Wind">💨 2 km/h</li>
            <li className="Humidity">💦 80%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
