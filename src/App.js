import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    totalNumber : 0,
    increase: 1
  }
}

  handleClick = () => {
this.setState({totalNumber: this.state.totalNumber + this.state.increase})
    console.log(this.totalNumber)
  }

  payForMore = () => {
    if (this.state.totalNumber < 10) {
      alert(`You can't afford that!`)
    } else {
      this.setState({
        totalNumber: this.state.totalNumber -10,
        increase: this.state.increase +1
      })
    }
  }

  reset = () => {
    this.setState ({
      totalNumber: 0,
      increase: 1
    })
  }
  render() {
    return  (
      <div>
        <h1>Current Score: {this.state.totalNumber}</h1>
        <button onClick={this.handleClick}>+{this.state.increase}</button>
        <button onClick={this.payForMore}>Pay 10 points to change from +{this.state.increase} to +{this.state.increase + 1}</button>
        <button onClick={this.reset}>Play again?</button>
      </div>
    )
  }
}

export default App;
