import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { points: 0, pointsButton: 1 };
  }

  increment = () => {
    const { points, pointsButton } = this.state;
    this.setState((prevState) => {
      return { points: prevState.points + pointsButton };
    });
  };

  increaseIncrement = () => {
    const { points, pointsButton } = this.state;
    if (points < 10) {
      alert("You can't afford that!");
    } else {
      this.setState({ pointsButton: pointsButton + 1 });
      this.setState({ points: points - 10 });
    }
  };

  reset = () => {
    const {points, pointsButton} = this.state;
    this.setState({points: 0, pointsButton: 1})
  }

  render() {
    const { points, pointsButton } = this.state;
    if (points > 99) {
      return (
        <div>
          <h1>Current Score: {points}</h1>
          <br></br>
          <h2>You Win!</h2>
          <button onClick={this.reset}>Play again?</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Current Score: {points}</h1>
          <button onClick={this.increment}>+{pointsButton}</button>
          <br></br>
          <button onClick={this.increaseIncrement}>
            Pay 10 points to change from +{pointsButton} to +{pointsButton + 1}
          </button>
        </div>
      );
    }
  }
}

export default Counter;
