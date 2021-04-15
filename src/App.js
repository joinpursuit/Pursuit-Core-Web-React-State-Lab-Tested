import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      total: 0
    }
  }

  handleClick = () =>{
    this.setState({total: this.state.total +1})
  }

  render() {
    return (
      <div>
        <h1>Current Score: {this.state.total}</h1>
        <button onClick={this.handleClick}>+1</button>
        <button>Pay 10 points to change from +1 to +2</button>
      </div>
    )
  }
}

export default App;