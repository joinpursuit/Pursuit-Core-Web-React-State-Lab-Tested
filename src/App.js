import React from 'react'
import { useState } from 'react'

export default function App() {
  const [score, setScore] = useState(0)
  const [pay, setPay] = useState(1)

  const onClick = (e) => {
    e.preventDefault()
    setScore(score + pay)
  }

  const buy = (e) => {
    e.preventDefault()
    if (score > 10) {
      setPay(pay + 1)
      setScore(score-10)
    }
    else {
      alert(`You can't afford that!`)
    }
  }

  const restart = (e) => {
    e.preventDefault()
    setScore(0)
    setPay(1)
  }
  return (
    <div>
      <h1>Current Score: {score}</h1>
      {
        (score >= 100) ?
          <>
            <h1>You Win!</h1>
            <button onClick={restart}>Play Again?</button>
          </>
          :
          <>
            <button onClick = {onClick}>+{pay}</button>
            <button onClick={buy}>Pay 10 points to change from +{pay} to +{pay + 1}</button>
          </>
      }
    </div>
  )
}
