import React from "react";
class ClickGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      increment: 1,
      // index: 0,
      // classReset: ["reset", "win"]


    };
  }
  changeNumber = () => {
    if (this.state.score >= 10) {
      this.setState({ score: this.state.score - 10 })
      this.setState({ increment: this.state.increment + 1 })
    } else {
      window.alert("You can't afford that!")
    }
  }
  increment = () => {
    // if over 100
    // if (this.state.score >= 100) {
    //   this.setState({ index: this.state.index = 1 })
    // }
    // //else 
    this.setState({ score: this.state.score + this.state.increment })

  }
  reset = () => {
    // this.setState({ index: this.state.index = 0 })
    this.setState({ score: this.state.score = 0 })
    this.setState({ increment: this.state.increment = 1 })
  }

  render() {
    if (this.state.score < 100) {
      return (
        <div>
          <h1>Current Score: {this.state.score}</h1>
          <button onClick={this.increment}>+{this.state.increment}</button>
          <button onClick={this.changeNumber}>Pay 10 points to change from +{this.state.increment} to +{this.state.increment + 1}</button>
        </div>
      )
    }
    else {
      return (
        <div>
          <h2>You Win!</h2>
          <button onClick={this.reset}>Play again?</button>
        </div>
      )
    }
  }
}

export default ClickGame;