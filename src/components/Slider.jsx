import React, { useState } from 'react';
import PropTypes from 'prop-types'

const Slider = ({ min, max, label, onValueChange, value }) => {

  const handleChange = (event) => {
    onValueChange(event.target.value);
  };

  return (
   <div>
    <span>{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      <p>Value: {value}</p>
    </div>
  )
};

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
}


export default Slider;
