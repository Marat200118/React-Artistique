// App.jsx
import React, { useState } from 'react';
import './App.css';
import Slider from './components/Slider';
import LinePatternGenerator from './components/LinePatternGenerator';
import ColorPicker from './components/ColorPicker'; // Import the ColorPicker component

const App = () => {
  const [strokeWidth, setStrokeWidth] = useState(0.2);
  const [lineCount, setLineCount] = useState(10);
  const [angle, setAngle] = useState(-45); // Default angle to match the fixedAngle in LinePatternGenerator
  const [lineColor, setLineColor] = useState('#00FF00');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Falling Stars Pattern Generator</h1>
        <Slider
          max={360}
          min={0}
          label="Angle"
          value={angle}
          onChange={setAngle}
        />
        <Slider
          max={2}
          min={0.1}
          label="Stroke Width"
          value={strokeWidth}
          onChange={setStrokeWidth}
        />
        <Slider
          max={100}
          min={1}
          label="Line Count"
          value={lineCount}
          onChange={setLineCount} // Update this to directly set the line count
        />
        <ColorPicker
          color={lineColor}
          onColorChange={setLineColor} // Update this to directly set the line color
        />
        <LinePatternGenerator
          lineCount={lineCount}
          strokeWidth={strokeWidth}
          lineColor={lineColor}
          angle={angle} // Pass the angle state to the LinePatternGenerator
        />
      </header>
    </div>
  );
}

export default App;
