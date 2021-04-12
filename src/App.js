import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      count: 0 ,
      increment: 1 
    }
  }

  increaseScore = () => {
    this.setState({
      count: this.state.count + this.state.increment
    })
  }

  payTen = () => {
    if (this.state.count < 10){
      window.alert("You can't afford that!")
    } else {
      this.setState({
        count: this.state.count - 10 ,
        increment: this.state.increment + 1
      })
    }
  }

  reset = () => {
    this.setState({
      count: 0 ,
      increment: 1
    })
  }


  render() {
    const {count , increment} = this.state

    if (count < 100){
      return (
        <div>
          <h1>Current Score: {count}</h1>
          <button onClick={this.increaseScore}>+{increment}</button>
          <button onClick={this.payTen}>Pay 10 points to change from +{increment} to +{increment + 1}</button>
        </div>
      )
    } else {
      return (
        <div>
          <h2>You Win!</h2>
          <button onClick={this.reset}>Play again?</button>
        </div>
      )
    }

  }

}

export default App;
