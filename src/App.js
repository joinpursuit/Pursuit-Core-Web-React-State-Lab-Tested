import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super ();
    this.state = {
      currentScore: 0,
      point: 1,
    };
  }

  addOne = () => {
    this.setState ({
      currentScore: this.state.currentScore + this.state.point
   })
  }

  payTen = () => {
    if(this.state.currentScore >= 10) {
      this.setState ({
        currentScore: this.state.currentScore - 10,
        point: this.state.point + 1
      })
    } else {
      alert("You can't afford that!")
    }
  }
 
  reset= () => {
    this.setState({ currentScore: 0, point: 1 });
  };

  render() {
    
    if(this.state.currentScore < 100) {
      return (
        <div>
          <h1>Current Score: {this.state.currentScore}</h1>
          <button onClick={this.addOne}>+{this.state.point}</button>
          <br></br>
          <button onClick={this.payTen}>Pay 10 points to change from +{this.state.point} to +{this.state.point + 1}</button>
          </div>
        )
      } else {
        return (
          <div>
          <h1>Current Score: {this.state.currentScore}</h1>
          <h2>You Win!</h2>
          <button onClick={this.reset}>Play again?</button>
        </div>
      )
      // const currentScore = this.state.currentScore
      
      // return (
      //   <div>
      //     <h1>Clicker React App</h1>
      //     <p>Current Score: {currentScore}</p>
      //     <button onClick={this.addOne}>Click to add</button>
      //     <hr></hr>
      //     <button onClick={this.payTen}>Pay 10 points to change from +{this.state.currentScore} to +{this.state.currentScore + 1}</button>
      //   </div>
      // )
    }

  }
}

export default App;



