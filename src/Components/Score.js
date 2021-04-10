import React from "react";

class Score extends React.Component {
  state = { score: 0 };

  increment = () => {
      const { score } = this.state
    this.setState({ score: score + 1 });
  }
  
  render() {
    const { score } = this.state
    return (
      <div>
       Current Score: {score}
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}

export default Score;
