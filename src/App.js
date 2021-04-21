import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      totalNumber: 0,
      value: 1,
    }
  }

  handleClick = () => {
    this.setState({totalNumber: this.state.totalNumber + this.state.value})
  }

  pointsClicked = () => {
    if(this.state.totalNumber >= 10) {
      this.setState({
        totalNumber: this.state.totalNumber - 10,
        value: this.state.value + 1,
      })
    } else {
      alert(`You can't afford that!`)
    }
  }

  resetGame = () => {
    this.setState({
      totalNumber: 0,
      value: 1,
    })
  }

  render() {
    if (this.state.totalNumber < 100) {
    return (
      <div>
        <h1>Current Score: {this.state.totalNumber}</h1>
        <button onClick={this.handleClick} >+ {this.state.value}</button>
        <button onClick={this.pointsClicked}>Pay 10 points to increase from +{this.state.value} to +{this.state.value + 1}</button>
      </div>
    )
    } else {
      return (
        <div>
          <h1>Current Score: {this.state.totalNumber}</h1>
          <h2>You Win!</h2>
          <button onClick={this.resetGame}>PlayAgain?</button>
        </div>
      )
    }
  }
}

export default App;
