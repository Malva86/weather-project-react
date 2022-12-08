import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon() {
  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="red"
      size={125}
      animate={true}
    />
  );
}
