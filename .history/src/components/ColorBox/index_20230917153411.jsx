import React, { useState } from "react";
import PropTypes from "prop-types";

ColorBox.propTypes = {};

function getRandomColor() {}

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
