// LinePatternGenerator.jsx
import React from 'react';
import PropTypes from 'prop-types';

const LinePatternGenerator = ({ lineCount, strokeWidth, lineColor, angle }) => {
  // Helper function to generate random values within a range
  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  const lines = Array.from({ length: lineCount }, (_, i) => {
    // Random starting points for x and y within the SVG viewbox
    const x1 = randomInRange(0, 100);
    const y1 = randomInRange(0, 100);
    const lineLength = randomInRange(30, 60); // Adjust max length as needed

    // Use the angle prop to set the direction of all lines
    const x2 = x1 + lineLength * Math.cos((angle * Math.PI) / 180);
    const y2 = y1 + lineLength * Math.sin((angle * Math.PI) / 180);

    return (
      <line
        key={i}
        x1={`${x1}%`}
        y1={`${y1}%`}
        x2={`${x2}%`}
        y2={`${y2}%`}
        stroke={lineColor}
        strokeWidth={strokeWidth}
      />
    );
  });

  return (
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      style={{ backgroundColor: 'black' }}
    >
      {lines}
    </svg>
  );
};

LinePatternGenerator.propTypes = {
  lineCount: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  lineColor: PropTypes.string.isRequired,
  angle: PropTypes.number.isRequired,
};

export default LinePatternGenerator;
