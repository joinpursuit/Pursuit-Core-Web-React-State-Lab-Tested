import React, { useState } from "react";

export default function ClickGame() {
  const [score, setScore] = useState(0);
  const [increment, setIncrement] = useState(1);
  const changeNumber = () => {
    if (score >= 10) {
      setScore( (prevScore) => prevScore - 10 )
      setIncrement( (prevIncrement) => prevIncrement + 1 )
    } else {
      window.alert("You can't afford that!")
    }
  }
  const inc = () => {
    setScore( (prevScore) => prevScore + increment )

  }
  const reset = () => {
    // this.setState({ index: this.state.index = 0 })
    setScore( (prevScore) => 0 )
    setIncrement( (prevIncrement) => 1 )
  }

  if (score < 100) {
    return (
      <div>
        <h1>Current Score: {score}</h1>
        <button onClick={inc}>+{increment}</button>
        <button onClick={changeNumber}>Pay 10 points to change from +{increment} to +{increment + 1}</button>
      </div>
    )
  }
  else {
    return (
      <div>
        <h2>You Win!</h2>
        <button onClick={reset}>Play again?</button>
      </div>
    )
  }
}