import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      value: 1,
      loss: true,
      win: false,
    };
  }

  increment = () => {
    if (this.state.score < 100) {
      this.setState(
        {
          score: this.state.score + this.state.value,
        },
        () => {
          if (this.state.score >= 100) {
            this.setState({
              loss: false,
              win: true,
            });
          }
        }
      );
    }
  };

  levelUp = () => {
    if (this.state.score >= 10) {
      this.setState({
        value: this.state.value + 1,
        score: this.state.score - 10,
      });
    } else {
      window.alert("You can't afford that!");
    }
  };

  reset = () => {
    this.setState({
      value: 1,
      score: 0,
      loss: true,
      win: false,
    });
  };

  render() {
    const { score, value, win, loss } = this.state;

    const text = () => {
      return (
        <>
          <div>
            <button onClick={this.increment}>+{value}</button>
          </div>
          <br />
          <br />
          <div>
            <button onClick={this.levelUp}>
              Pay 10 points to change from +{value} to +{value + 1}
            </button>
          </div>
        </>
      );
    };

    const winText = () => {
      return (
        <div>
          <div>
            <h2>You Win!</h2>
          </div>
          <div className="center">
            <button onClick={this.reset}>Play again?</button>
          </div>
        </div>
      );
    };

    return (
      <div className="main">
        <div className="header">
          <h1>Current Score: {score}</h1>
        </div>
        {loss ? text() : ""}
        <br />
        <div>{win ? winText() : ""}</div>
      </div>
    );
  }
}

export default App;
