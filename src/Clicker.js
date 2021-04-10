import React from "react";

export default class Clicker extends React.Component {
    constructor() {
        super();
        this.state = {
            points: 0,
            pointsButton: 1,
            payButton: 2,
        };
    }
    addPoints = () => {
        this.setState({
            points: this.state.points + this.state.pointsButton,
        });
    };
    payPoints = () => {
        if(this.state.points >= 10){
            this.setState({
                points: this.state.points - 10,
                pointsButton: this.state.pointsButton + 1,
                payButton: this.state.payButton + 1,
            });
        } else {
            alert('You can\'t afford that!')
        }
    };
    playAgain = () => {
        this.setState({
            points: 0,
            pointsButton: 1,
            payButton: 2,
        });
    }
  
    render() {
        const { points, pointsButton, payButton } = this.state;
        if(points < 100){
            return (
                <div>
                    <p>
                        <h1 role='heading'>Current Score: {points}</h1> 
                    </p>
                    <p>
                        <button onClick={this.addPoints}>+{pointsButton}</button>
                    </p>
                    <p>
                        <button onClick={this.payPoints}>Pay 10 points to change from +{pointsButton} to +{payButton}</button>
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <p>
                        <h1 role='heading'>Current Score: {points}</h1> 
                    </p>
                    <p>
                        <h2>You Win!</h2>
                    </p>
                    <p>
                        <button onClick={this.playAgain}>Play again?</button>
                    </p>
                </div>
            );
        }
    }
}