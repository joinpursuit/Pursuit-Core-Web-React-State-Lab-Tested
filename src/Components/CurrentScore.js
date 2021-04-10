import React from "react";

class CurrentScore extends React.Component {
  constructor(props) {
    super();
    this.state = { count: 0, increment: 1 };
  }

  resetScore = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - prevState.count,
        increment: prevState.increment - prevState.increment + 1,
      };
    });
  };

  changeScore = () => {
    if (this.state.count <= 100) {
      this.setState((prevState) => {
        return { count: prevState.count + this.state.increment };
      });
    } else {
      return;
    }
  };

  tenPointChange = () => {
    if (this.state.count >= 10) {
      this.setState((prevState) => {
        return {
          increment: prevState.increment + 1,
          count: this.state.count - 10,
        };
      });
    } else {
      window.alert("You can't afford that!");
    }
  };

  render() {
    const gamePlay = (
      <div>
        <h2>Current Score: {this.state.count}</h2> <br></br>
        <button onClick={this.changeScore}>+{this.state.increment}</button>{" "}
        <br></br>
        <button onClick={this.tenPointChange}>
          Pay 10 points to change from +{this.state.increment} to +
          {this.state.increment + 1}
        </button>
      </div>
    );

    const wonGame = (
      <div>
        <h2>You Win</h2> <br></br>
        <button onClick={this.resetScore}>Play again?</button>
      </div>
    );

    return <div>{this.state.count < 100 ? gamePlay : wonGame}</div>;
  }
}

export default CurrentScore;
