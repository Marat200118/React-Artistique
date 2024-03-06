import React, { useState } from 'react';
import './App.css';
import Slider from './components/Slider';
import LinePatternGenerator from './components/LinePatternGenerator';
import ColorPicker from './components/ColorPicker'; 

const App = () => {
  const [strokeWidth, setStrokeWidth] = useState(0.25);
  const [lineCount, setLineCount] = useState(50); 
  const [angle, setAngle] = useState(-45); 
  const [startColor, setStartColor] = useState('#00FF00');
  const [endColor, setEndColor] = useState('#FF0000');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Falling Stars Pattern Generator</h1>
        <Slider
          max={360}
          min={0}
          step={1}
          label="Angle"
          value={angle}
          onChange={setAngle}
        />
        <Slider
          max={1}
          min={0.05}
          step={0.01}
          label="Stroke Width"
          value={strokeWidth}
          onChange={setStrokeWidth}
        />
        <Slider
          max={100}
          min={1}
          step={1}
          label="Line Count"
          value={lineCount}
          onChange={setLineCount}
        />
        <ColorPicker
          label="Start Color"
          color={startColor}
          onColorChange={setStartColor}
        />
        <ColorPicker
          label="End Color"
          color={endColor}
          onColorChange={setEndColor}
        />
      </header>
      <LinePatternGenerator
          lineCount={lineCount}
          strokeWidth={strokeWidth}
          startColor={startColor}
          endColor={endColor}
          angle={angle}
        />
    </div>
  );
}

export default App;


