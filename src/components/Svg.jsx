import React from 'react';

const Svg = ({ currentShape, size, color = 'red' }) => {
  const svgSize = 200;
  const center = svgSize / 2;

  const renderShape = () => {

    const sharedProps = {
      stroke: color,
      strokeWidth: "4",
      fill: "none",
      className: "neon"
    };

    switch (currentShape) {
      case 'circle':
        return <circle {...sharedProps} cx={center} cy={center} r={size / 2} />;
      case 'square':
      case 'default': 
        const squareX = center - size / 2;
        const squareY = center - size / 2;
        return <rect {...sharedProps} x={squareX} y={squareY} width={size} height={size} />;
      case 'triangle':
        const halfSize = size / 2;
        const trianglePoints = [
          { x: center, y: center - halfSize },
          { x: center - halfSize, y: center + halfSize },
          { x: center + halfSize, y: center + halfSize }
        ];
        const pathData = `M ${trianglePoints[0].x},${trianglePoints[0].y} L ${trianglePoints[1].x},${trianglePoints[1].y} L ${trianglePoints[2].x},${trianglePoints[2].y} Z`;
        return <path {...sharedProps} d={pathData} />;
    }
  };

  return (
    <>
    <svg viewBox={`0 0 ${svgSize} ${svgSize}`} width="200" height="200" 
    style={{
      filter: `drop-shadow(0 0 8px ${color}) drop-shadow(0 0 10px ${color}) drop-shadow(0 0 12px ${color})`,
    }}
    >
      {renderShape()}
    </svg>
    </>
  );
};

export default Svg;
