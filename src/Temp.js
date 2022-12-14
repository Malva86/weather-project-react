import React from "react";

export default function Temp(props) {
  return (
    <div>
      <strong>
        {Math.round(props.celsius)}
        <span className="unit">°C</span>
      </strong>
    </div>
  );
}
