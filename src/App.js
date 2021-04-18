// THE CODE COMMENTED BELOW WAS WORKING WELL, BUT WAS NOT PASSING TESTS. 
// HAD TO SCRAP THE CSS AND RENDER IT DIFFERENTLY, WITHOUT DISPLAY: NONE.

// import React from "react";
// import "./App.css";

// // The state object will contain:
//   // The firstVar variable
//     // This will be used inside the first button, and second button
//     // This will increment by 1 after successfully incrementing the amount with second button
//   // The secondVar variable
//     // will only be used in the second button to display what the first button will change to
//     // this will increment by 1 after successfully incrementing the amount with second button
// // Every time the +1 button is pressed:
//   // The score in {currentScore} is incremented by 1.
//   // The +1 text needs to be in firstVar, in first button and second button.
//   // We do this by using a function called clickOnce()
//     // clickOnce() will have a setState method
//       // the setState() method will contain one argument: an object incrementing currentScore by one
//         // we do this by having currentScore refer to itself plus firstVar
// // Every time the second button is pressed, the text from the second button will change and:
//   // The +1 text will be the first 
//   // The +2 text will be in a secondVar variable, in second button
//   // It will require 10 points being removed from the currentScore
//   // It will increment the firstVar and secondVar by 1
//   // We do this by using a function called addTen()
//     // addTen() will have a setState that changes the state of our class component, under the condition that the user has over 10 points. We do this with an if statement.
//     // Our setState() method will contain one argument, an object:
//       // this object will update three of our keys: currentScore, firstVar and secondVar
//         // currentScore will refer to itself minus 10
//         // firstVar will refer to itself plus 1
//         // secondVar will increase itself plus 2
// // In order to use our two functions that manipulate the component's state, we need to:
//   // Link these functions that hold event handlers to the corresponding buttons with the onClick event listener


// class App extends React.Component {
//   constructor() {
//     super()

//     this.state = {
//       currentScore: 0,
//       firstVar: 1,
//       secondVar: 2,
//       buttonClassName: '',
//       h2ClassName: 'hidden'
//     }
//   }

//   handleClick = () => {
//       if (this.state.currentScore < 100) {
//         this.setState({
//           currentScore: this.state.currentScore + this.state.firstVar
//         })
//       }
//   }

//   handleAddTen = () => {
//     if (this.state.currentScore >= 10) {
//       this.setState({
//         currentScore: this.state.currentScore - 10,
//         firstVar: this.state.firstVar + 1,
//         secondVar: this.state.secondVar + 1
//       })
//     } else {
//       alert("You can't afford that!")
//     }
//   }

//   // handleWin = () => {
//   //   if (currentScore >= 100) {
//   //     return (
//   //       <h2 className={h2ClassName}>You Win!</h2>,
//   //       <button className={h2ClassName}>Play again?</button>
//   //     )
//   //   }
//   // }

//   handleStartOver = () => {
//     this.setState({
//       currentScore: 0,
//       buttonClassName: '',
//       h2ClassName: 'hidden',
//       firstVar: 1,
//       secondVar: 2
//     })
//   }

//   render() {
//     let currentScore = this.state.currentScore
//     let h2ClassName = this.state.h2ClassName
//     let buttonClassName = this.state.buttonClassName

//     {if (currentScore >= 100) {
//       h2ClassName=''
//       buttonClassName='hidden'
//     }}
    
//     return (
//       <div>
//         <h1 onChange={this.handleChange}>Current Score: {currentScore}</h1>
//         <button className={buttonClassName} onClick={this.handleClick}> +{this.state.firstVar}</button><br/>
//         <button className={buttonClassName} onClick={this.handleAddTen}>Pay 10 points to change from +{this.state.firstVar} to +{this.state.secondVar}</button>
//         <h2 className={h2ClassName}>You Win!</h2>
//         <button className={h2ClassName} onClick={this.handleStartOver}>Play again?</button>
//       </div>
//     ) 
    
//   }
// }

// export default App;

// THE FOLLOWING CODE WORKS, EVEN THOUGH IT WORKS THE SAME WAY AS PREVIOUS CODE WHEN USER RUNS:
import React from "react";
import "./App.css";



class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentScore: 0,
      firstVar: 1,
      secondVar: 2,
    }
  }

  handleClick = () => {
      if (this.state.currentScore < 100) {
        this.setState({
          currentScore: this.state.currentScore + this.state.firstVar
        })
      }
  }

  handleAddTen = () => {
    if (this.state.currentScore >= 10) {
      this.setState({
        currentScore: this.state.currentScore - 10,
        firstVar: this.state.firstVar + 1,
        secondVar: this.state.secondVar + 1
      })
    } else {
      alert("You can't afford that!")
    }
  }

  handleStartOver = () => {
    this.setState({
      currentScore: 0,
      firstVar: 1,
      secondVar: 2
    })
  }


  render() {

    if (this.state.currentScore < 100) {
        return (
            <div>
              <h1>Current Score: {this.state.currentScore}</h1>
              <button onClick={this.handleClick}> +{this.state.firstVar}</button><br/>
              <button onClick={this.handleAddTen}>Pay 10 points to change from +{this.state.firstVar} to +{this.state.secondVar}</button>
            </div>
        )}
    else {
        return (
            <div>
                <h2>You Win!</h2>
                <button onClick={this.handleStartOver}>Play again?</button>
            </div>
        )
    }
  }
}

export default App;
