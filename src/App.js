import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() { //defines state
    super()

    this.state = {
      total: 0,
      value: 1
    }
  }

  handleClick = () =>{
    this.setState({total: this.state.total + this.state.value})
  }

  handlePointsClick = () => {
    if(this.state.total >= 10){
      this.setState({
        total: this.state.total - 10, 
        value: this.state.value + 1
      })
    } else {
      alert("You can't afford that!")
    }
  }

  reset = () => {
    this.setState({total: 0, value: 1})
  }

  render() {
    if(this.state.total < 100){
      return (
        <div>
          <h1>Current Score: {this.state.total}</h1>
          <button onClick={this.handleClick}>+{this.state.value}</button>
          <button onClick={this.handlePointsClick}>Pay 10 points to change from +{this.state.value} to +{this.state.value +1}</button>
        </div>
      )
    } else {
      return (
        <>
          <h1>Current Score: {this.state.total}</h1>
          <h2>You Win!</h2>
          <button onClick={this.reset}>Play again?</button>
        </>
      )
    }
    
  }
}

export default App;