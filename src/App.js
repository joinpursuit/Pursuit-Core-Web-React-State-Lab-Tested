import React from "react";

import "./App.css";

class App extends React.Component {
  state = { score: 0, incrementValue: 1 }


  

  increment=()=> {
    if(this.state.score >= 10){
      const h2 = document.querySelector(".win")
      const play = document.querySelector(".play")
      const button = document.querySelector(".button")
      const button2 = document.querySelector(".button2")
      button.style = "opacity: 0"
      button2.style = "opacity: 0"
      h2.textContent = "You Win!"
      play.textContent= "Play Again?";
      debugger
    }
    this.setState({ score: this.state.score + this.state.incrementValue })
  }

    
    

  increaseValue = () =>{
    const {score, incrementValue} = this.state;
    if(score > 10){
      this.setState({
        score: score - 10, incrementValue: incrementValue + 1
      })
    }else{
      alert("You can't afford that!")
    }
  }

  resetGame = () =>{
    const {score, incrementValue} = this.state;
    this.setState({
      score: 0, incrementValue: 1
    })
  }


  render() {
    const { score, incrementValue } = this.state;
    return (<>
      <h1>Current Score: {score}</h1>
      <button className="button" onClick={this.increment}>+{incrementValue}</button>
      <button className="button2" onClick={this.increaseValue}>Pay 10 points to change from +{incrementValue} to +{incrementValue+1}</button>
      <h2 className="win"></h2>
      <button className="play" onClick={this.resetGame}></button>
    </>)
  }
}

export default App;
