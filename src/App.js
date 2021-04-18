import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      score:0,
      increment:1
    }
  }
  handleClick =()=>{
    this.setState({
      score: this.state.score+ this.state.increament
    })
  }

  pay =()=>{
    if(this.state.score <10){
      window.alert("You can't afford that!")
    }else{
      this.setState({
      score: this.state.score -10,
      increment: this.state.increment+1
  })
}
}

reset =()=> {
  this.setState({
    score: 0,
    increment:1
  })
}
  render() {
    const {score, increment} =this.state
    if (score <100){
    return (
    <div>
      <h1>Current Score: {score}</h1>
      <button onClick ={this.handleClick}>+{increment}</button>
      <button onClick={this.pay}>Pay 10 points to increase from +1 to +2</button>
    </div>

      )
  }else{
    return(
      <div>
        <h2>You win!</h2>
        <button onClick ={this.reset}>Play again?</button>
      </div>
    )
  }
}
}
export default App;
