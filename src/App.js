import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      score: 0,
      upgrade: 1
    }
  }
  increaseScore = () => {
    this.setState({
      score: this.state.score + this.state.upgrade
    })
  }
  payToUpgrade = () => {
    if(this.state.score < 10){
      alert("You can't afford that!")
    } else {
      this.setState({
        score: this.state.score - 10,
        upgrade: this.state.upgrade + 1
      })
    }
  }
  resetScore = () => {
    this.setState({
      score: 0,
      upgrade: 1
    })
  }
  render() {
    const div = this.state.score < 100 ? <>
                                           <button onClick={this.increaseScore}>+{this.state.upgrade}</button>
                                           <button onClick={this.payToUpgrade}>Pay 10 points to change from +{this.state.upgrade} to +{this.state.upgrade + 1}</button>
                                         </>
                                       : <>
                                          <h2>You Win!</h2>
                                          <button onClick={this.resetScore}>Play again?</button>
                                        </>
    return (
      <div>
        <h1>Current Score: {this.state.score}</h1>
        {div}
      </div>
    )
  }
}

export default App;
