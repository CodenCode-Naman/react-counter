import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
    console.log(count);
  };
  const decrease = () => {
    setCount((count) => count - 1);
    console.log(count);
  };
  const reset = () => {
    setCount(0);
    console.log(count);
  };
  return (
    <div className="react-counter">
      <h1>React Counter Component</h1>
      <span className="counter-output">{count}</span>

      <div className="btn">
        <button className="operation-btn" onClick={increase}>
          Increament(+)
        </button>
        <button className="operation-btn" onClick={decrease}>
          Decreament(-)
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
