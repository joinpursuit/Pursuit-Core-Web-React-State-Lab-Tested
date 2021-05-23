import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [score, setScore] = useState(0)

  const [increment, setIncrement] = useState(1)

  const increaseScore = (increment) => {
    setScore(score + increment)
  };

  const decreaseScore = (num) => {
    if (score < 10) {
      alert("You can't afford that!")
    } else {
      setIncrement(increment + 1)
      setScore(score - num)
    }
  };

  const playAgain = (num) => {
    setScore(score - score)
    setIncrement(num)
  }


  if (score < 100) {
    return (
      <div>
        <h1>Current Score: {score}</h1>
        <button onClick={() => increaseScore(increment)}>+{increment}</button>
        <button onClick={() => decreaseScore(10)}>Pay 10 points to change from +{increment} to +{increment + 1}</button>
      </div>

    )
  } else {
    return (
      <div>
        <h1>Current Score: {score}</h1>
        <h2>You Win!</h2>
        <button onClick={() => playAgain(1)}>Play again?</button>
      </div>
    )
  }
};

export default App;


