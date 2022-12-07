import React from "react";

export default function Weather() {
  return (
    <div className="WeatherApp">
      <form>
        <div className="row">
          <div className="col-md-6">
            <input type="search" placeholder="Type a city..." />
          </div>
          <div className="col-md-6">
            <input type="submit" value="Search" />
          </div>
        </div>
      </form>
      <div className="row City">
        <div className="col-md-6">
          <ul>
            <li>Warsaw, PL</li>
            <li>Sunday 10:00:00</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h6 className="Desc">Rain</h6>
        </div>
      </div>
      <div className="row Condition">
        <div className="col-md-6">
          <img
            scr="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Icon"
          />
        </div>
        <div className="col-md-6">
          <ul>
            <li>Temp: 12°C</li>
            <li>Wind: 2 km/h</li>
            <li>Humidity: 80%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
