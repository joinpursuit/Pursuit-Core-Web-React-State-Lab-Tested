import React from "react";

import "./App.css";

const defaultState = {
  score: 0,
  value: 1,
};

export default class App extends React.Component {
  state = defaultState;

  incrementScore = () => {
    this.setState((state) => ({
      score: state.score + state.value,
    }));
  };

  incrementValue = () => {
    if (this.state.score < 10) {
      alert("You can't afford that!");
      return;
    }

    this.setState((state) => {
      return {
        score: state.score - 10,
        value: state.value + 1,
      };
    });
  };

  playAgain = () => {
    this.setState(defaultState);
  };

  renderGame() {
    return (
      <>
        <button className="increase-score" onClick={this.incrementScore} type="button">
          +{this.state.value}
        </button>
        <button className="increase-value" onClick={this.incrementValue} type="button">
          Pay 10 points to change from +{this.state.value} to +{this.state.value + 1}
        </button>
      </>
    );
  }

  renderVictory() {
    return (
      <>
        <h2 className="heading you-win">You Win!</h2>
        <button onClick={this.playAgain}>Play again?</button>
      </>
    );
  }

  render() {
    return (
      <div id="app">
        <h1 className="heading">Current Score: {this.state.score}</h1>
        {this.state.score >= 100 ? this.renderVictory() : this.renderGame()}
      </div>
    );
  }
}
