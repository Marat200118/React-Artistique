import React, { useState } from 'react';
import './App.css';
import Slider from './components/Slider';
import LinePatternGenerator from './components/LinePatternGenerator';
import ColorPicker from './components/ColorPicker'; 

const App = () => {
  const [strokeWidth, setStrokeWidth] = useState(0.2);
  const [lineCount, setLineCount] = useState(40);
  const [angle, setAngle] = useState(-45); 
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
          onChange={setLineCount}
        />
        <ColorPicker
          color={lineColor}
          onColorChange={setLineColor} 
        />
        <LinePatternGenerator
          lineCount={lineCount}
          strokeWidth={strokeWidth}
          lineColor={lineColor}
          angle={angle} 
        />
      </header>
    </div>
  );
}

export default App;
