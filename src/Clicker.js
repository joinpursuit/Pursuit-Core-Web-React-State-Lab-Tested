import React from 'react'


class Clicker extends React.Component {
    constructor() {
        super()
        this.state = {
            currentScore: 0,
            pointsButton: 1,
            payButton: 2
        }
    }

    addPoints = () =>{
        this.setState({
            currentScore: this.state.currentScore + this.state.pointsButton,
        })
    }
    
    paymentButton = () =>{
        if(this.state.currentScore >= 10){
            this.setState({
                currentScore: this.state.currentScore - 10,
                pointsButton : this.state.pointsButton + 1,
                payButton: this.state.payButton + 1,


            })
        } else {
            alert("You can't afford that!")
        }
    }
        playButton = () =>{
            this.setState ({
                currentScore :0,
                pointsButton: 1,
                payButton:2
            })
        }



        render() {
            const {currentScore,pointsButton,payButton} = this.state
            if(currentScore < 100){
                return (
                    <div>
                        <h1> Current Score: {currentScore}</h1>
                    
                        <button onClick={this.addPoints}>+{pointsButton}</button>
                        <button onClick={this.paymentButton}>Pay 10 points to change from +{pointsButton} to +{payButton}</button>
                    

                </div>
            )
        } else {
            return (
                <div>
                        <h1>Current Score: {currentScore}</h1>
                    
                        <h2>You Win!</h2>
                        <button onClick={this.playButton}>Play again?</button>
                    
                </div>
            )
        }
    }
}
    
export default Clicker