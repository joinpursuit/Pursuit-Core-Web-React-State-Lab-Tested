import React from "react";
import  "./ClickerGame.css"

class ClickerGame extends React.Component{
    constructor(props){
        super(props)
        this.state = {score:0, button1:1}
    }

    increment= () => {
        const {score, button1} =this.state
        if(score < 100){
            this.setState({score: score + button1})
        } else {

        }
    }

    decrease10 = () => {
        const {score, button1} = this.state

        if(score >=10){
        this.setState({score:score-10, button1: button1 + 1})
        } else {
            alert("You can't afford")
        }
    }

    playAgain = () =>{
        this.setState({score:0, button1:1})

    }
    render(){
        const {score, button1} =this.state
        if(score<=100) {
        return (
            <div className="Game">
                <h1>Current Score: {score} </h1>
                <button onClick = {this.increment}>+{button1}</button>
                <button onClick = {this.decrease10}>Pay 10 points to change from +{button1} to +{button1 +1}</button>

            </div>
           
        )
    } else {
        return (
            <div className="reset">
                <h1>Current Score: {score} </h1>
                <h2>You Win!</h2>
                <button onClick = {this.playAgain}>Play again?</button>
            </div>
        )
    }
}
}

export default ClickerGame