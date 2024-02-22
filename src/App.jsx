import React, { useState } from 'react';
import './App.css';
import Slider from './components/Slider';
import ShapeButton from './components/ShapeButton';
import Svg from './components/Svg';

function App() {
  const [size, setSize] = useState(40); // Default size, assuming 40 as a base value for size
  const [currentShape, setCurrentShape] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Artistique</h1>
        <Svg currentShape={currentShape} size={size} />
        <div>
          <ShapeButton shapeName="circle" setCurrentShape={setCurrentShape} />
          <ShapeButton shapeName="square" setCurrentShape={setCurrentShape} />
          <ShapeButton shapeName="triangle" setCurrentShape={setCurrentShape} />
        </div>
        <h2>Size: {size}</h2>
        <Slider
          min={10} // Minimum size
          max={100} // Maximum size
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
