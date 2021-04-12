import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super ()

    this.state = {
      score : 0 ,
      increment : 1 ,
    }
  }

  increment = () => {
    this.setState({ score : this.state.score + this.state.increment})
  }

  handleClick = () => {
    if (this.state.score < 10) {
      window.alert("You can't afford that!")
    } else {
      this.setState ({score : this.state.score - 10})
      this.setState ({increment : this.state.increment + 1})
    }
  }

  resetGame = () => {
    this.setState ({ score :  0})
    this.setState ({ increment : 1 })
  }

  render() {
    if (this.state.score < 100 ) {
    return (
      <div className ="click">
      <h1>Current Score: {this.state.score}</h1>
      <button onClick={this.increment}>+{this.state.increment}</button>
      <button onClick={this.handleClick}>Pay 10 points to change from +{this.state.increment} to +{this.state.increment + 1}</button>
      </div>
    )
    } else {
      return (
        <div>
          <h2>You Win!</h2>
          <button onClick={this.resetGame}>Play again?</button>
        </div>

      )
    }
  }
}

export default App;
