import React, { useState, useEffect } from 'react';
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

  const getRandomInRange = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  
  const [strokeWidth, setStrokeWidth] = useState(getRandomInRange(0.05, 1));
  const [lineCount, setLineCount] = useState(Math.round(Math.random() * 150)); 
  const [angle, setAngle] = useState(Math.round(Math.random() * 360)); 
  const [startColor, setStartColor] = useState(getRandomColor());
  const [endColor, setEndColor] = useState(getRandomColor());
  const [theme, setTheme] = useState('dark');  //Group them all together for better readability

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // const randomizeStars = () => {
  //   const newStars = generateStarsAttributes(lineCount);
  //   setStarsAttributes(newStars);
  // };

  const generateStarsAttributes = (count) => {
    return Array.from({ length: count }, (_, i) => {
      const x1 = Math.random() * 120 - 10;
      const y1 = Math.random() * 100;
      const lineLength = getRandomInRange(30, 100);
      const angleRad = angle * (Math.PI / 180);
      const x2 = x1 + lineLength * Math.cos(angleRad);
      const y2 = y1 + lineLength * Math.sin(angleRad);
      return { x1, y1, x2, y2, originalLength: lineLength };
    });
  };

  const [starsAttributes, setStarsAttributes] = useState(() => generateStarsAttributes(Math.round(Math.random() * 150)));

  useEffect(() => {
    const currentCount = starsAttributes.length;
    if (lineCount > currentCount) {
      const additionalStars = generateStarsAttributes(lineCount - currentCount);
      setStarsAttributes(currentStars => [...currentStars, ...additionalStars]);
    } else if (lineCount < currentCount) {
      setStarsAttributes(currentStars => currentStars.slice(0, lineCount));
    }
  }, [lineCount]);

  useEffect(() => {
    const updatedStars = starsAttributes.map(attr => {
      const lineLength = getRandomInRange(30, 100);
      const angleRad = angle * (Math.PI / 180);
      const x2 = attr.x1 + lineLength * Math.cos(angleRad);
      const y2 = attr.y1 + lineLength * Math.sin(angleRad);
      return { ...attr, x2, y2 };
    });
    setStarsAttributes(updatedStars);
  }, [angle]);
 

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
          max={150}
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
        strokeWidth={strokeWidth}
        startColor={startColor}
        endColor={endColor}
        svgBackgroundColor={svgBackgroundColor}
        starsAttributes={starsAttributes}
      />
      <button onClick={switchTheme} className='switchThemeButton' style={{color: buttonTextColor, backgroundColor: textColor}}>Switch Theme</button>
      {/* <button onClick={randomizeStars} className='randomizeStarsButton' style={{ marginTop: '20px', color: buttonTextColor, color: 'black', borderColor: textColor }}>
  Randomize Stars
</button> */}
    </div>
  );
}

export default App;


