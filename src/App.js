import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      score: 0,
      increment: 1,
    };
  }

  handleClick = () => {
    this.setState({
      score: this.state.score + this.state.increment,
    });
  };

  alert = () => {
    if (this.state.score < 10) {
      alert("You can't afford that!");
    } else {
      this.setState({
        score: this.state.score - 10,
        increment: this.state.increment + 1,
      });
    }
  };

  restartGame = () => {
    this.setState({
      score: 0,
      increment: 1
    });
  };

  render() {
    const { score, increment } = this.state;

    if (this.state.score < 100) {
      return (
        <div className="clicker-game">
            <h1>
              Current Score: {score}
            </h1>
            <button onClick={this.handleClick}>+{increment}</button>
            <br></br>
            <br></br>
            <button onClick={this.alert}>
              Pay 10 points to change from +{this.state.increment} to +
              {this.state.increment + 1}
            </button>
        </div>
      );
    } else {
      return (
        <div className="clicker-game">
          <h1>
            Current Score: {score}
          </h1>

          <h2>You Win!</h2>
          <button onClick={this.restartGame}>Play again?</button>
        </div>
      );
    }
  }
}

export default App;
