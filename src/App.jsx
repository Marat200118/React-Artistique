import React, { useState } from 'react';
import './App.css';
import Slider from './components/Slider';
import ShapeButton from './components/ShapeButton';
import Svg from './components/Svg';
import ColorPicker from './components/ColorPicker';

function App() {
  const [size, setSize] = useState(Math.floor(Math.random() * 100) + 1); 
  const [currentShape, setCurrentShape] = useState('square');
  const [color, setColor] = useState('yellow');

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Artistique</h1>
        <ColorPicker color={color} onColorChange={setColor} />
        <Svg currentShape={currentShape} size={size} color={color} />
        <div>
          <ShapeButton shapeName="circle" setCurrentShape={setCurrentShape} />
          <ShapeButton shapeName="square" setCurrentShape={setCurrentShape} />
          <ShapeButton shapeName="triangle" setCurrentShape={setCurrentShape} />
        </div>
        <h2>Size: {size}</h2>
        <Slider
          min={50}
          max={180}
          label="Shape Size"
          value={size}
          onValueChange={(newValue) => {
            setSize(parseInt(newValue));
          }}
        />
      </header>
    </div>
  );
}

export default App;
