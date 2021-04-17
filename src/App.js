import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      adder: 1,
    };
  }

  handleClick = () => {
    this.setState({
      score: this.state.score + this.state.adder,
    });
  };

  payPoints = () => {
    if (this.state.score < 10) {
      alert("You can't afford that!");
    } else {
      this.setState({
        score: this.state.score - 10,
        adder: this.state.adder+ 1,
      });
    }
  };

  resetGame = () => {
    this.setState({
      score: 0,
      adder: 1,
    });
  };
  render() {
    const { score } = this.state;

    if (this.state.score < 100) {
      return (
        <div>
          <h1>Current Score: {score}</h1>
          <button onClick={this.handleClick}>+{this.state.adder}</button>
          <br />
          <button onClick={this.payPoints}>
            Pay 10 points to change from +{this.state.adder} to +
            {this.state.adder + 1}
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Current Score: {score}</h1>
          <h2>You Win!</h2>
          <button onClick={this.resetGame}>Play again?</button>
        </div>
      );
    }
  }
}

export default App;
