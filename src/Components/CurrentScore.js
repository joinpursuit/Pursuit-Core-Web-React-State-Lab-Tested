import React from "react"

class CurrentScore extends React.Component {
    constructor (props) {
        super(props);
        this.state = {currentscore: 0, buttonscore: 1}
    }

    increment = () => {
        this.setState ((prevState)=>{
            return {currentscore: prevState.currentscore +1}
        });
    }

    incrementButton = () => {
        this.setState ({buttonscore: this.state.buttonscore +1})
    }
    

    decrement = () => {
        let { currentscore } = this.state;
        if(currentscore  <10) {
            return alert ("You can't afford this")
        } else {
            this.setState({currentscore: currentscore - 10})
            let { buttonscore } = this.state;
            this.setState({buttonscore: buttonscore + 1 })
        }
    }

    render (){
        const {currentscore} = this.state
        return (
            <div>
                <h2>Current Score : {currentscore}</h2>
                {/* Clicks: {currentscore} */}
                <button onClick={this.increment}> +{this.state.buttonscore}</button>
                {/* Clicks: {this.state.buttonscore} */}
                <br></br>
                <button  class={ this.state.buttonscore} onClick={this.decrement}> Pay 10 points to change from +{this.state.buttonscore} to +{this.state.buttonscore +1} </button>
            </div>
        )
    }
}

export default CurrentScore