// LinePatternGenerator.jsx
import React from 'react';
import PropTypes from 'prop-types';

const LinePatternGenerator = ({ lineCount, strokeWidth, lineColor, angle }) => {

  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  const lines = Array.from({ length: lineCount }, (_, i) => {
   
    // const x1 = randomInRange(0, 100);
    // const x1 = Math.random() * 100;
    // const y1 = randomInRange(0, 100);
    // const y1 = Math.random() * 100;

    const x1 = Math.random() * 120 - 10; // Starting from -10% to 110% of the viewBox width
    const y1 = Math.random() * 120 - 10; // Starting from -10% to 110% of the viewBox height

    const lineLength = randomInRange(30, 100);

    const x2 = x1 + lineLength * Math.cos((angle * Math.PI) / 180);
    const y2 = y1 + lineLength * Math.sin((angle * Math.PI) / 180);

    return (
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={`url(#gradient${i})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    );
  });

  return (
    <svg
      viewBox="50 0 50 110"
      preserveAspectRatio="xMidYMid meet"
      width="100%"
      height="100%"
      style={{ backgroundColor: 'black' }}
    >
      <defs>
        {lines.map((_, i) => (
          <linearGradient id={`gradient${i}`} gradientUnits="userSpaceOnUse" x1="100" y1="100" x2="100" y2="0">
            <stop offset="0%" style={{stopColor: lineColor, stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: lineColor, stopOpacity: 0}} />
          </linearGradient>
        ))} //improve the syntax
      </defs>
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
