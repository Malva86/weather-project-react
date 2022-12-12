import React from "react";
import Icon from "./Icon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div>
      <div className="row one">
        <div className="col-4">
          <div className="forDay">Mon</div>
          <div className="forIcon">
            <Icon code="01d" size={45} />
          </div>
          <div className="forTemp">
            <span className="forTempMax">10°C</span>|
            <span className="forTempMin">15°C</span>
          </div>
        </div>
        <div className="col-4">
          <div className="forDay">Mon</div>
          <div className="forIcon">
            <Icon code="01d" size={45} />
          </div>
          <div className="forTemp">
            <span className="forTempMax">10°C</span>|
            <span className="forTempMin">15°C</span>
          </div>
        </div>
        <div className="col-4">
          <div className="forDay">Mon</div>
          <div className="forIcon">
            <Icon code="01d" size={45} />
          </div>
          <div className="forTemp">
            <span className="forTempMax">10°C</span>|
            <span className="forTempMin">15°C</span>
          </div>
        </div>
      </div>

      <div className="row two">
        <div className="col-4">
          <div className="forDay">Mon</div>
          <div className="forIcon">
            <Icon code="01d" size={45} />
          </div>
          <div className="forTemp">
            <span className="forTempMax">10°C</span>|
            <span className="forTempMin">15°C</span>
          </div>
        </div>
        <div className="col-4">
          <div className="forDay">Mon</div>
          <div className="forIcon">
            <Icon code="01d" size={45} />
          </div>
          <div className="forTemp">
            <span className="forTempMax">10°C</span>|
            <span className="forTempMin">15°C</span>
          </div>
        </div>
        <div className="col-4">
          <div className="forDay">Mon</div>
          <div className="forIcon">
            <Icon code="01d" size={45} />
          </div>
          <div className="forTemp">
            <span className="forTempMax">10°C</span>|
            <span className="forTempMin">15°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
