import React, { useState } from "react";

export default function Temp(props) {
  const [unit, setUnit] = useState("celsius");
  function Far(event) {
    event.preventDefault();
    setUnit("Far");
  }

  function Cel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahr() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <strong>
          {Math.round(props.celsius)}
          <span className="unit">°C</span>|
          <span className="unit">
            <a href="/" onClick={Far}>
              °F
            </a>
          </span>
        </strong>
      </div>
    );
  } else {
    return (
      <div>
        <strong>
          {Math.round(fahr())}
          <span className="unit">
            <a href="/" onClick={Cel}>
              °C
            </a>
          </span>
          |<span className="unit">°F</span>
        </strong>
      </div>
    );
  }
}
