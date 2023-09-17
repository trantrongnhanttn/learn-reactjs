import React from "react";
import { PropTypes } from "prop-types";

function ColorBox(props) {
  const { color } = props;
  return (
   <div className='box' style={{backgroundColor:color}}></div>
  )
}

export default ColorBox;
