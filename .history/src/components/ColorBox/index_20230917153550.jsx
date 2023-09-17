import React, { useState } from "react";
import PropTypes from "prop-types";

ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  const randomIndex = Math.trunc(Math.random() * 5);
}

function ColorBox() {
  const [color, setColor] = useState("deeppink");

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      Color Box
    </div>
  );
}

export default ColorBox;
