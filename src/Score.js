import React from "react";

class Score extends React.Component {
  constructor() {
    super();
    this.state = { button1Value: 1, count: 0};
  }
  incrementCountBy1 = () => {
    const { count } = this.state;
    const { button1Value } = this.state;
    this.setState({ count: count + button1Value });
  };
  incrementButtonBy1 = () => {
    const { count } = this.state;
    const { button1Value } = this.state;
    if (count < 10) {
      alert("You can't afford that!");
    } else {
      this.setState({ button1Value: button1Value + 1 });
      this.setState({count: count - 10})
    }
  };
  render() {
    const { count } = this.state;
    const { button1Value } = this.state;
    return (
      <div>
        <h1>Current Score: {count}</h1>
        <button onClick={this.incrementCountBy1}>+{button1Value}</button>
        <button onClick={this.incrementButtonBy1}>
          Pay 10 points to change from +{button1Value} to +{button1Value + 1}
        </button>
      </div>
    );
  }
}

export default Score;
