import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [score, setScore] = useState(0);
  const [increment, setIncrement] = useState(1);
  const changeNumber = () => {
    if (score >= 10) {
      setScore(score - 10);
      setIncrement(increment + 1);
    } else {
      alert("You can't afford that!");
    }
  };

  const counter = () => {
    setScore(score + increment);
  };
  const reset = () => {
    setScore(0);
    setIncrement(1);
  };

  if (score < 100) {
    return (
      <div className="counter">
        <h1>Current Score: {score}</h1>
        <button onClick={counter}> +{increment}</button>
        <button onClick={changeNumber}>
          Pay 10 points to change from +{increment} to +{increment + 1}
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>You Win!</h2>
        <button onClick={reset}>Play again?</button>
      </div>
    );
  }
};

export default Counter;
