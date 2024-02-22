import React from 'react';

const ShapeButton = ({ shapeName, setCurrentShape }) => {
  return (
    <button onClick={() => setCurrentShape(shapeName)}>
      {shapeName}
    </button>
  );
};

export default ShapeButton;
