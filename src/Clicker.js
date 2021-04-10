import React from 'react';

class Clicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {points: 0,
                    pointsButton: 1,
                    paymentButton: 2
                }
    }
    playAgain = () => {
        this.setState({
            points: 0,
            pointsButton: 1,
            payButton: 2,
        });
    }

    encrement = () => {
        // const { points } = this.state
        this.setState({points: this.state.points + this.state.pointsButton })
    }

    pointsPayment = () => {
        if(this.state.points >= 10){
            this.setState({
                points: this.state.points - 10,
                pointsButton: this.state.pointsButton + 1,
                paymentButton: this.state.paymentButton + 1,
            });
        } else {
            alert('You can\'t afford that!')
        }
    };

    render() {
        const { points, pointsButton, paymentButton } = this.state
        if(points < 100) {
            return (
                <div>
                    <h1>Current Score: {points}</h1>
                    <button onClick={this.encrement}>+{pointsButton}</button>
                    <p>
                    <button onClick={this.pointsPayment}>Pay 10 points to change from +{pointsButton} to +{paymentButton}</button>
                    </p>
                </div>
                    )

        } else {
            return (
                <div>
                    <h1>Current Score: {points}</h1>
                    <h2>You Win!</h2>
                    <p>
                        <button onClick={this.playAgain}>Play again?</button>
                    </p>
                </div>
            )
        }
    }
}

export default Clicker