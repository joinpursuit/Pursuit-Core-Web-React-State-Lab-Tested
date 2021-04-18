import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super()
this.state = {
value:1,
score:0,
num : 0
  }
}

add = () => {
  this.setState({
    score: this.state.score + this.state.value
  })
}

pay = () => {
  if (this.state.score < 10) {
    alert("You can't afford that!");
  }else {
    this.setState({
      score: this.state.score - 10,
      value: this.state.value + 1,
      });
    }
  }

  resetGame = () => {
    this.setState({
      score:0,
      value: 1,
    })
  }
//   handleClick = () => {
// this.setState({num: this.state.num + 5})
//     // this.num += 1;
//   }
  render() {
    const { score } =this.state;
    if (this.state.score < 100) {
      return (
        <div>
          <h1>Current Score: {score}</h1>
          <button onClick={this.add}>+{this.state.value}</button>
          <br/>
          <button onClick={this.pay}>
            pay 10 points to change from +{this.state.value} to +{this.state.value + 1}
          </button>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Current Score: {score}</h1>
          <h2>You Win!</h2>
          <button onClick={this.resetGame}>Play again?</button>

        </div>
      )
    }
    // return (
    //   <div>
    //     <h1>Currect Score : {this.state.num}</h1>
    //     <button onClick={this.handleClick}>+1</button>
    //     <button>Pay 10 points to increase from +1 to +2</button>
    //   </div>
    // )
  }
}

export default App;
