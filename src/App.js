import React from 'react'

import './App.css'

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			score: 0,
			value: 1,
		}
	}

	handleClick = () => {
		this.setState({ score: this.state.score + this.state.value })
	}

	payPoints = () => {
		if (this.state.score < 10) {
			alert("You can't afford that!")
		} else {
			this.setState({
				score: this.state.score - 10,
				value: this.state.value + 1,
			})
		}
	}

	youWin = () => {
    this.setState({
      score: 0,
      value: 1
    })
  }

	render() {
		if (this.state.score < 100) {
			return (
				<div>
					<h2>Current Score: {this.state.score}</h2>
					<button onClick={this.handleClick}>+{this.state.value}</button>
					<button onClick={this.payPoints}>
						Pay 10 points to change from +{this.state.value} to +{this.state.value + 1}
					</button>
				</div>
			)
		} else {
      return (
        <div>
          <h1>Current Score: {this.state.score}</h1>
          <h2>You Win!</h2>
          <button onClick={this.youWin}>Play again?</button>
        </div>
      )
    }
	}
}

export default App
