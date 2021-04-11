import React from "react";

import "./App.css";

class App extends React.Component {
  state = {
    score: 0,
    value: 1,
  };

  increment = () => {
    let { score, value } = this.state;
    this.setState({ score: score + value });

    
  };

  pay = () => {
    let { score, value } = this.state;
    if (score >= 10) {
      this.setState({ score: score - 10 });
      this.setState({ value: value + 1 });
    } else {
      alert("You can't afford that!");
    }
  };

  restart = () => {
    let {
      score,
      value,
    } = this.state;
    this.setState({ score: (score = 0) });
    this.setState({ value: (value = 1) });
    
  };
  render() {
    const {
      score,
      value,
    } = this.state;
    if (score < 100) {
      return (
      <main className="App">
        <h1>Current Score: {score}</h1>
        <button onClick={this.increment}>
          +{value}
        </button>
        <button onClick={this.pay}>
          Pay 10 points to change from +{value} to +{value + 1}
        </button>
        </main>
      )
    } else {
      return (

      <main className="App">
      <h1>Current Score: {score}</h1>
      <h2>You Win!</h2>
        <button  onClick={this.restart}>
          Play again?
        </button>
      </main>
      )
    }
  }
}

export default App;
