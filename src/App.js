import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      totalNum: 0
      
    }
  }

  handleClick = () => {
    this.setState({ totalNum : this.state.totalNum + 1 })
  }
  render() {
    return (
      <div>
        <h2>Current Score: {this.state.totalNum}</h2>
        <button onClick={this.handleClick}>+1</button>
        <button>Pay 10 points to change from +1 to +2</button>
      </div>
    )
  }
}

export default App;
