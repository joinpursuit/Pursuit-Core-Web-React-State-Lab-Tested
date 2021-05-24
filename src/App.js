import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {
	const [score, setScore] = useState(0)

	const [value, setValue] = useState(1)

	const handleClick = (value) => {
		setScore(score + value)
	}

	const payPoints = (num) => {
		if (score < 10) {
			alert("You can't afford that!")
		} else {
			setScore(score - num)
			setValue(value + 1)
		}
	}

	const youWin = (num) => {
		setScore(score - score)
		setValue(num)
	}

	if (score < 100) {
		return (
			<div className='App'>
				<h2 style={{ textAlign: 'center' }}>Current Score: {score}</h2>
				<button style={{ color: 'navy' }} onClick={() => handleClick(value)}>
					+{value}
				</button>
				<button onClick={() => payPoints(10)}>
					Pay 10 points to change from +{value} to +{value + 1}
				</button>
			</div>
		)
	} else {
		return (
			<div className='App'>
				<h1>Current Score: {score}</h1>
				<h2>You Win!</h2>
				<button onClick={() => youWin(1)}>Play again?</button>
			</div>
		)
	}
}

export default App
