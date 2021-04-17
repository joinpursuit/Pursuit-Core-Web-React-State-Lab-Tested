import React from "react";
import "./Score.css";

class Score extends React.Component {
  state = { score: 0, count: 1, win: false, pay: true };

  increment = () => {
    const { score, count } = this.state;
    this.setState({ score: score + count });
    this.youWin();
  };

  payTen = () => {
    const { score, count } = this.state;
    if (score < 10) {
      window.alert("You can't afford that!");
    } else {
      this.setState({ score: score - 10 });
      this.setState({ count: count + 1 });
    }
  };

  youWin = () => {
    const { score } = this.state;
    if (score >= 99) {
      this.setState({ win: true });
      this.setState({ pay: false });
    }
  };

  reset = () => {
    this.setState({ score: 0, count: 1, win: false, pay: true });
  };

  render() {
    const { score, count, win, pay } = this.state;
    return (
      <>
        {pay ? (
          <div className="score">
            <h1>Current Score: {score}</h1>
            <button onClick={this.increment}>+{count}</button>
            <button onClick={this.payTen}>
              Pay 10 points to change from +{count} to +{count + 1}
            </button>
          </div>
        ) : null}

        {win ? (
          <div>
            <h2>You Win!</h2> <button onClick={this.reset}>Play again?</button>
          </div>
        ) : null}
      </>
    );
  }
}

export default Score;

