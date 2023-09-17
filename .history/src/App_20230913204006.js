import React from "react";
import { ReactPropTypes } from "react";

function ColorBox(props) {
  const { color } = props;
  return (
   <div className='box' style={{backgroundColor:color}}></div>
  )
}

export default ColorBox;
