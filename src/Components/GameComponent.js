import React from "react";

class GameComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      score: 0,
      incrementAmount: 1,
      newAmount: 2,
      startOver: "",
      win: false,
    };
  }
  increment = () => {
    // if (this.state.score >= 100) {

    this.setState({ score: this.state.score + this.state.incrementAmount });
  };

  incrementButton = () => {
    if (this.state.score < 10) {
      alert("You can't afford that!");
    } else {
      this.setState({ incrementAmount: this.state.incrementAmount + 1 });
      this.setState({ newAmount: this.state.newAmount + 1 });
      this.setState({ score: this.state.score - 10 });
    }
  };

  playAgain = () => {
    this.setState({ startOver: "Play Again!" });
    this.setState({ win: true });
    this.setState({ score: 0 });
    this.setState({incrementAmount: + 1});
    this.setState({ newAmount: + 2});
  };

  render() {
    if (this.state.score < 100) {
      return (
        <div>
          <h2>Current Score: {this.state.score}</h2>
          <button onClick={this.increment}>
            +{this.state.incrementAmount}
          </button>
          <button onClick={this.incrementButton}>
            Pay 10 points to change from +{this.state.incrementAmount} to +
            {this.state.newAmount}
          </button>
        </div>
      );
    } else {
      return (
        <section>
          <h2>You Win!</h2>
          <button onClick={this.playAgain}>Play again?</button>
        </section>
      );
    }
  }
}

export default GameComponent;
