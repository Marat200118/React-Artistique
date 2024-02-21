import { useState } from 'react'
import './App.css'
import Slider from './components/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Artistique</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </header>
    <Slider
        min={0} 
        max={100} 
        label="label"
        value={count} 
        onValueChange={setCount}
      />
    </div>

  )
}

export default App
