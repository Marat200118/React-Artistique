import React, { useState } from 'react';
import './App.css';
import Slider from './components/Slider';
import LinePatternGenerator from './components/LinePatternGenerator';
import ColorPicker from './components/ColorPicker'; 

const App = () => {

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];   //* taken from https://stackoverflow.com/questions/1484506/random-color-generator
    }
    return color;
  };
  
  const [strokeWidth, setStrokeWidth] = useState(0.25);
  const [lineCount, setLineCount] = useState(Math.random() * 100); 
  const [angle, setAngle] = useState(Math.random() * 360); 
  const [startColor, setStartColor] = useState(getRandomColor());
  const [endColor, setEndColor] = useState(getRandomColor());
  const [theme, setTheme] = useState('dark');

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  const svgBackgroundColor = theme === 'dark' ? '#1C1D1E' : '#F7F7F7';
  const textColor = theme === 'dark' ? '#F7F7F7' : '#1C1D1E';
  const buttonTextColor = theme === 'dark' ? '#1C1D1E' : '#F7F7F7';

  return (
     <div className="App" style={{ color: textColor }}>
      <header className="App-header">
        <h1>Falling Stars Pattern Generator</h1>
        <Slider
          max={360}
          min={0}
          step={1}
          label="Angle"
          value={angle}
          onChange={(newValue) => setAngle(Number(newValue))}
        />
        <Slider
          max={1}
          min={0.05}
          step={0.01}
          label="Stroke Width"
          value={strokeWidth}
          onChange={(newValue) => setStrokeWidth(Number(newValue))}
        />
        <Slider
          max={100}
          min={1}
          step={1}
          label="Line Count"
          value={lineCount}
          onChange={(newValue) => setLineCount(Number(newValue))}
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
          svgBackgroundColor={svgBackgroundColor}
        />
         <button onClick={switchTheme} className='switchThemeButton' style={{color: buttonTextColor, backgroundColor: textColor}}>Switch Theme</button>
    </div>
  );
}

export default App;


