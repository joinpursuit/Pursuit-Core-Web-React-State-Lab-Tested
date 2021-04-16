import React from "react";
import "./App.css";

// The state object will contain:
  // The firstVar variable
    // This will be used inside the first button, and second button
    // This will increment by 1 after successfully incrementing the amount with second button
  // The secondVar variable
    // will only be used in the second button to display what the first button will change to
    // this will increment by 1 after successfully incrementing the amount with second button
// Every time the +1 button is pressed:
  // The score in {currentScore} is incremented by 1.
  // The +1 text needs to be in firstVar, in first button and second button.
  // We do this by using a function called clickOnce()
    //
// Every time the second button is pressed, the text from the second button will change and:
  // The +1 text will be the first 
  // The +2 text will be in a secondVar variable, in second button
  // It will require 10 points being removed from the currentScore
  // It will increment the firstVar and secondVar by 1
  // We do this by using a function called addTen()
    // addTen() will have a setState that changes the state of our class component
    // Our class component will have 


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentScore: 0,
      firstVar: 1,
      secondVar: 2
    }
  }

  clickOnce = () => {
    this.setState({
      
    })
  }

  render() {
    return (
      <div>
        <header><h1>Current Score: {this.state.currentScore}</h1></header>
        <button> +{this.state.firstVar}</button><br/>
        <button>Pay 10 points to change from +{this.state.firstVar} to +{this.state.secondVar}</button>
      </div>
    ) 
  }
}

export default App;
