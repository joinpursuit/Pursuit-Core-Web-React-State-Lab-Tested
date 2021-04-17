import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    totalNumber: 0,
    incrementer: 1
    }
  }

  handleClick = () => {
    this.setState({
      totalNumber: this.state.totalNumber + this.state.incrementer
    })
  }

  subtract = () => {
    
    if (this.state.totalNumber < 10){
      window.alert("You can't afford that!")
    } else {
      this.setState({
        totalNumber: this.state.totalNumber - 10 ,
        incrementer: this.state.incrementer + 1
      })
    }
  }

  restart = () => {
    this.setState({
      totalNumber: 0 ,
      incrementer: 1
    })
  }





  render() {
    if (this.state.totalNumber < 100){
    return (
      <div>
        <h1>Current Score: {this.state.totalNumber}</h1>
        <button onClick={this.handleClick}>+{this.state.incrementer}</button>
        <button onClick={this.subtract}>pay 10 points to increase from +{this.state.incrementer} to +{this.state.incrementer + 1}</button>
      </div>
    )
  } else {
    return (
      <div>
         <h1>Current Score: {this.state.totalNumber}</h1>
        <h2>You Win!</h2>
        <button onClick={this.restart}>Play again?</button>
      </div>
    )
  }
}
}

export default App;
