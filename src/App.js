import {React, useState} from "react";
import "./App.css";

const App = () => {
  const [score, setScore] = useState(0)
  const [incrementValue, setIncrementValue] = useState(1)

  const increment = () => {
    setScore(score + incrementValue)
  }

  const increaseValue = () => {
    if (score > 9) {
      setScore(score - 10);
      setIncrementValue(incrementValue + 1)
    } else {
      alert("You can't afford that!")
    }
  }

  const resetGame = () => {
    setScore(0);
    setIncrementValue(1)
  }
    if (score < 100) {
      return (<>
        <h1>Current Score: {score}</h1>
        <button className="button" onClick={increment}>+{incrementValue}</button>
        <button className="button2" onClick={increaseValue}>Pay 10 points to change from +{incrementValue} to +{incrementValue + 1}</button>
      </>)
    } else {
      return (<>
       <h1>Current Score: {score}</h1>
        <h2 className="win">You Win!</h2>
        <button className="play" onClick={resetGame}>Play again?</button>
      </>)
    }
}

export default App;
