import React from "react";

class Score extends React.Component {
    constructor() {
        super();
        this.state = {button1Value:1, count:0, buttonCounter:0}
        
    }
    incrementCountBy1 = () => {
        const { count } = this.state
        const { button1Value } = this.state
        this.setState({count: count + button1Value})
    }
    incrementButtonBy1 = () => {
        const { button1Value } = this.state;
        this.setState({button1Value: button1Value + 1})
    }
    render() {
        const { count } = this.state;
        const { button1Value } = this.state;
        return (
            <div>
                <h1>Current Score: {count}</h1>
                <button onClick={this.incrementCountBy1}>+{button1Value}</button>
                <button onClick={this.incrementButtonBy1}>Pay 10 points to change from {count}</button>
            </div>
        )
    }
}

export default Score;