import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    //beginning state
    this.state = {
      totalNumber: 0
    }
    
    
  }

  handleClick = () => {
    // this.totalNumber += 1
    console.log(this.totalNumber)
    //what ever set set runs is what it is equal to
    //count by 5
    this.setState({
      totalNumber: this.state.totalNumber + 5
    })
  }

  handleBuy = () => {
    if (this.totalNumber > 10) {
      this.setState({
        totalNumber: this.state.totalNumber - 10
      })

    }
  }


  render() {
    return(
      <div>
        <h1>Current Score: {this.state.totalNumber}</h1>
        <button onClick={ this.handleClick }>+1</button>
        <button>Pay 10 points to increase from +1 to +2</button>
      </div>
    )
  }
}

export default App;
