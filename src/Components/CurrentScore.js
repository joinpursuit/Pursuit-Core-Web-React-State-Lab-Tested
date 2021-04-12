import React from "react";

class CurrentScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentscore: 0, buttonscore: 1, showtext: false };
  }
  playAgain = () => {
    this.setState({ currentscore: 0, buttonscore: 1, showText: false });
  };

  increment = () => {
    this.setState({
      currentscore: this.state.currentscore + this.state.buttonscore,
    });
  };

  incrementButton = () => {
    this.setState({ buttonscore: this.state.buttonscore + 1 });
  };

  decrement = () => {
    let { currentscore } = this.state;
    if (currentscore < 10) {
      return alert("You can't afford that!");
    } else {
      this.setState({ currentscore: currentscore - 10 });
      let { buttonscore } = this.state;
      this.setState({ buttonscore: buttonscore + 1 });
    }
  };

  render() {
    const { currentscore, showtext } = this.state;
    return (
      <div>
        <h3>Current Score: {currentscore}</h3>
        <div></div>
        {currentscore < 100 && (
          <button onClick={this.increment}> +{this.state.buttonscore}</button>
        )}

        <br></br>
        {currentscore < 100 && (
          <button onClick={this.decrement}>
            {" "}
            Pay 10 points to change from +{this.state.buttonscore} to +
            {this.state.buttonscore + 1}{" "}
          </button>
        )}
        <br></br>
        <div>
          {currentscore >= 100 && <h2>You Win!</h2>}
          {currentscore >= 100 && <button onClick={this.playAgain}>Play again?</button>}
        </div>
      </div>
    );
  }
}

export default CurrentScore;

// updateShowText = () => {
//     const {currentscore} = this.state;
//     if(currentscore >=100) {
//         this.setState({showText: true})
//     }
// }

// removeText = () => {
//     const {currentscore} = this.state
//     this.setState({showText:false})
// }

// winnerScreen = () => {
//     const {currentscore} = this.state;
//     if (currentscore >=100) {
//         this.setState ({currentscore: this.state.currentscore
//     } else {
//         if (currentscore >100)
//        return this.setState({showText:false})
//     }
// }
