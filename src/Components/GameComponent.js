import React from "react";

class GameComponent extends React.Component {
  constructor(props) {
    super();
    this.state = { count: 0 , incrementAmount:1};
  }
  increment = () => {
    this.setState({ count: this.state.count + this.state.incrementAmount });
  };

  incrementButton = () =>{
      this.setState({ incrementAmount: this.state.incrementAmount +1 })
  }
  render() {
    return (
      <div>
        <h2>Current Score: {this.state.count}</h2>
        <button onClick={this.increment}>+{this.state.incrementAmount}</button>
        <button onClick={this.incrementButton}> increment</button>
      </div>
    );
  }
}

export default GameComponent;
