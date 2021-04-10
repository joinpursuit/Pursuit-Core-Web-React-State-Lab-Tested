import React from "react";

import "./App.css";

class App extends React.Component {
  state = { score: 0, incrementValue: 1 }

  increment = () => {
    const { score, incrementValue } = this.state;
    this.setState({ score: score + incrementValue })
  }

  increaseValue = () => {
    const { score, incrementValue } = this.state;
    if (score >= 10) {
      this.setState({
        score: score - 10, incrementValue: incrementValue + 1
      })
    } else {
      alert("You can't afford that!")
    }
  }

  resetGame = () => {
    const { score, incrementValue } = this.state;
    this.setState({ score: 0, incrementValue: 1 })
  }

  render() {
    const { score, incrementValue } = this.state;
    if (score < 100) {
      return (<>
        <h1>Current Score: {score}</h1>
        <button onClick={this.increment}>+{incrementValue}</button>
        <br></br>
        <br></br>
        <button onClick={this.increaseValue}>Pay 10 points to change from +{incrementValue} to +{incrementValue + 1}</button>
      </>)
    } else {
      return (<>
       <h1>Current Score: {score}</h1>
        <h2>You Win!</h2>
        <button onClick={this.resetGame}>Play again?</button>
      </>)
    }
  }
}
export default App;
