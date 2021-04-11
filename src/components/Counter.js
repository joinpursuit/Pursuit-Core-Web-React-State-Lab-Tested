import React from "react";
import './Counter.css'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { score: 0, increment: 1, index: 0, classRest: ["reset", "win"]};
  }
  changeNumber = () => {
    if (this.state.score >= 10) {
      this.setState({ score: this.state.score - 10 });
      this.setState({ increment: this.state.increment + 1 });
    } else {
      alert("You can't afford that!");
    }
  };

  counter = () => {
    this.setState({ score: this.state.score + this.state.increment });
    //   this.state.score++;
  };
  reset = () => {
    this.setState({ score: (this.state.score = 0) });
    this.setState({ increment: (this.state.increment = 1) });
  };
  render() {
      if(this.state.score < 100){
          return(

      <div className="counter">
        <h1>Current Score: {this.state.score}</h1>
        <button onClick={this.counter}> +{this.state.increment}</button>
        <button onClick={this.changeNumber}>
          Pay 10 points to change from +{this.state.increment} to +
          {this.state.increment + 1}
        </button>
        </div>
          )
      }
      else{
          return (
              <div>
              <h2>You Win!</h2>
              <button onClick={this.reset}>Play again?</button>
            </div>
          );
        }
      }
}

export default Counter;
