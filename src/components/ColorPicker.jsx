// ColorPicker.jsx
import React from 'react';

const ColorPicker = ({ color, onColorChange }) => {
  return (
    <input
      type="color"
      value={color}
      onChange={e => onColorChange(e.target.value)}
      style={{ 
        margin: '10px',
      }}
    />
  );
};

export default ColorPicker;
