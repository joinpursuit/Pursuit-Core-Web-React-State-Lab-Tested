import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    totalNumber : 0
    }
  }

  handleClick = () => {
    this.setState({totalNumber: this.state.totalNumber + 5})
  }
  render() {
    return (
      <div>
        <h1>Current Score: {this.state.totalNumber}</h1>
        <button onClick={this.handleClick}>+1</button>
        <button>pay 10 points to increase from +1 to +2</button>
      </div>
    )
  }
}

export default App;
