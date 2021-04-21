import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentValue: 0,
      addedValue: 1
    }
  }
  buttonClick = () => {
    this.setState({
      currentValue: this.state.currentValue + this.state.addedValue
    })
  }
  pointChangeClick = () => {
    if (this.state.currentValue >= 10) {
      this.setState({
        currentValue: this.state.currentValue - 10,
        addedValue: this.state.addedValue + 1
      })
    }
    else {
      alert(`You can't afford that!`)
    }
  }
  restart = () => {
    this.setState({
      currentValue: 0,
      addedValue: 1
    })
  }
  render() {
    if(this.state.currentValue > 100) {
      return(
      <>
        <h1>Current Score: {this.state.currentValue}</h1>

        <h2>You Win!</h2>

        <button onClick={this.restart}>Play again?</button>
      </>
      )
    }
    else {
      return(
      <>
        <h1>Current Score: {this.state.currentValue}</h1>

        <button onClick={this.buttonClick}>+{this.state.addedValue}</button>

        <button onClick={this.pointChangeClick}>Pay 10 points to change from +{this.state.addedValue} to +{(this.state.addedvalue + 1)}</button>
      </>
      )
    }
  }
}

export default App;
