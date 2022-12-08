import React from "react";

export default function Temp(props) {
  return (
    <div>
      <strong>{Math.round(props.celsius)}°C</strong>
    </div>
  );
}
