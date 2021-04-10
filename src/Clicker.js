import React from "react";

export default class Clicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 0,
            pointsButton: 1,
            payButton: 2,
        };
    }
    addPoints = () => {
        const { points, pointsButton} = this.state;
        this.setState({
            points: points + pointsButton,
        });
    };
    payPoints = () => {
        const { points, pointsButton, payButton} = this.state;
        if(points >= 10){
            this.setState({
                points: points - 10,
                pointsButton: pointsButton + 1,
                payButton: payButton + 1,
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
                    <h1>Current Score: {points}</h1> 
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
                    <h1>Current Score: {points}</h1> 
                    <h2>You Win!</h2>
                    <p>
                        <button onClick={this.playAgain}>Play again?</button>
                    </p>
                </div>
            );
        }
    }
}