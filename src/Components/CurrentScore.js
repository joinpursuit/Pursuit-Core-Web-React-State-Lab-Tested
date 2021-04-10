import React from "react"

class CurrentScore extends React.Component {
    constructor (props) {
        super(props);
        this.state = {currentscore: 0}
    }

    increment = () => {
        this.setState ((prevState)=>{
            return {currentscore: prevState.currentscore +1}
        })
    }

    decrement = () => {
        const { currentscore } = this.state;
        if(currentscore  <10) {
            return alert ("You can't afford this")
        } else {
            this.setState({currentscore: currentscore - 10})
            
        }
    }

    render (){
        const {currentscore} = this.state
        return (
            <div>
                <h2>Current Score : {currentscore}</h2>
                {/* Clicks: {currentscore} */}
                <button onClick={this.increment}>+1</button>
                <br></br>
                <button onClick={this.decrement}> Pay 10 points to change from +1 to +2 </button>
            </div>
        )
    }
}

export default CurrentScore