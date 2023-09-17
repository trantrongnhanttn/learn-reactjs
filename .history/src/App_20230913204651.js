import React from "react";
import PropTypes from 'prop-types';

function ColorBox(props) {
  const { color } = props;
  return (
   <div className='box' style={{backgroundColor:color}}></div>
  )
}

ColorBox.PropTypes = {
  color: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
};


export default ColorBox;
