import React from "react";

class Clicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            payPoints: 1,
            addPoints: 2,
        }
    }
    increment = () => {
        this.setState({
            score: this.state.score + this.state.payPoints,
        })
    }
    payTen = () => {
        const {score} = this.state
        const {payPoints} = this.state
        const {addPoints} = this.state
        if (score >= 10){
            this.setState({
                score: score - 10,
                payPoints: payPoints + 1,
                addPoints: addPoints + 1,
            })
        } else {
            alert('You can\'t afford that!')
        }
    }
    playAgain = () => {
        this.setState({
            score: 0,
            payPoints: 1,
            addPoints: 2,
        })
    }
    render() {
        if(this.state.score < 100){
            return (
                <div>
                    <h1>Current Score: {this.state.score}</h1>
                    <p>
                    <button onClick={this.increment}>+{this.state.payPoints}</button>
                    </p>
                    <p>
                    <button onClick={this.payTen}>Pay 10 points to change from +{this.state.payPoints} to +{this.state.addPoints}</button>
                    </p>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Current Score: {this.state.score}</h1>
                    <h2>You Win!</h2>
                    <button onClick={this.playAgain}>Play again?</button>
                </div>
            )
        }

    }
}

export default Clicker