// LinePatternGenerator.jsx
import React from 'react';
import PropTypes from 'prop-types';

const LinePatternGenerator = ({ lineCount, strokeWidth, startColor, endColor, angle }) => {

  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  const lineElements = Array.from({ length: lineCount }, (_, i) => {
    const x1 = Math.random() * 120 - 10; // Starting from -10% to 110% of the viewBox width
    const y1 = Math.random() * 100; // Starting from -10% to 110% of the viewBox height
    const lineLength = randomInRange(30, 100);
    const x2 = x1 + lineLength * Math.cos((angle * Math.PI) / 180);
    const y2 = y1 + lineLength * Math.sin((angle * Math.PI) / 180);
    const fadedEndColor = endColor + '1A';


    const gradientId = `gradient${i}`;
    const gradient = (
      <linearGradient key={gradientId} id={gradientId} gradientUnits="userSpaceOnUse" x1={x1} y1={y1} x2={x2} y2={y2}>
        <stop offset="0%" stopColor={startColor} stopOpacity="1" />
        <stop offset="50%" stopColor={endColor} stopOpacity="1" />
        <stop offset="100%" stopColor={fadedEndColor} stopOpacity="0" />
      </linearGradient>
    );

    const line = (
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={`url(#${gradientId})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    );

    return { line, gradient };
  });

  return (
    <svg
       viewBox="70 0 1 100" // Updated viewBox to encompass the random line starts and ends
      preserveAspectRatio="xMidYMid meet"
      width="100%"
      height="100%"
      style={{ backgroundColor: 'black' }}
    >
      <defs>
        {lineElements.map(({ gradient }) => gradient)}
      </defs>
      {lineElements.map(({ line }) => line)}
    </svg>
  );
};

LinePatternGenerator.propTypes = {
  lineCount: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  startColor: PropTypes.string.isRequired,
  endColor: PropTypes.string.isRequired,
  angle: PropTypes.number.isRequired,
};

export default LinePatternGenerator;
