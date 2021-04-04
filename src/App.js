import React from "react";

import "./App.css";

const COST = 10;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      incrementer: 1,
    };
  }

  handleIncrementClick = () => {
    const { score, incrementer } = this.state;
    const newScore = score + incrementer;
    this.setState({
      score: newScore,
    });
  };

  handlePay = () => {
    console.log("purchase button clicked!");
    const { score, incrementer } = this.state;
    if (score < COST) {
      window.alert("You can't afford that!");
    } else {
      const newScore = score - COST;
      const newIncrementer = incrementer + 1;
      this.setState({
        score: newScore,
        incrementer: newIncrementer,
      });
    }
  };

  handlePlayAgain = () => {
    this.setState({
      score: 0,
      incrementer: 1,
    });
  };

  renderGame = () => {
    const { score, incrementer } = this.state;
    return (
      <>
        <button onClick={this.handleIncrementClick}>+{incrementer}</button>
        <button onClick={this.handlePay}>
          Pay {COST} points to change from +{incrementer} to +{incrementer + 1}
        </button>
      </>
    );
  };

  renderVictory = () => {
    return (
      <>
        <h2>You Win!</h2>
        <button onClick={this.handlePlayAgain}>Play again?</button>
      </>
    );
  };

  render() {
    const { score } = this.state;
    return (
      <section className="App">
        <h1>Current Score: {score}</h1>
        {score < 100 ? this.renderGame() : this.renderVictory()}
      </section>
    );
  }
}

export default App;
