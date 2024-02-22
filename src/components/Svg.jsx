import React from 'react';

const Svg = ({ currentShape, size }) => {
  const svgSize = 200; // Define the overall SVG size
  const center = svgSize / 2; // Center point for SVG

  const renderShape = () => {
    switch (currentShape) {
      case 'circle':
        return <circle cx={center} cy={center} r={size / 2} stroke="blue" strokeWidth="4" fill="none" />;
      case 'square':
        const squarex = center - size / 2;
        const squarey = center - size / 2;
        return <rect x={squarex} y={squarey} width={size} height={size} stroke="red" strokeWidth="4" fill="none" />;
      case 'triangle':
        const halfSize = size / 2;
        const trianglePoints = [
          { x: center, y: center - halfSize },
          { x: center - halfSize, y: center + halfSize },
          { x: center + halfSize, y: center + halfSize }
        ];
        const pathData = `M ${trianglePoints[0].x},${trianglePoints[0].y} L ${trianglePoints[1].x},${trianglePoints[1].y} L ${trianglePoints[2].x},${trianglePoints[2].y} Z`;
        return <path d={pathData} stroke="green" strokeWidth="4" fill="none" />;
      default:
        const squareX = center - size / 2;
        const squareY = center - size / 2;
        return <rect x={squareX} y={squareY} width={size} height={size} stroke="red" strokeWidth="4" fill="none" />;
    }
  };

  return (
    <svg viewBox={`0 0 ${svgSize} ${svgSize}`} width="200" height="200">
      {renderShape()}
    </svg>
  );
};

export default Svg;
