import React from "react";
import "./Score";

class Pay extends React.Component {
    state = { count: 0 }
    
    payten = (props) => {
        const { count } = this.state;
        const { score } = props;
        this.setState({ count: count + 2 });
        this.setState({ score: score  - 10 });
        
        if (score < 10) {
            // window.alert
            alert("You can't afford that!");
        } else {
            // score -10
            // change the button text from +1 to +2
            // change the increment by +1
        }
    }

    render() {
        // const { count } = this.state;
        return (
            <div>
                <button onClick={this.payten}>Pay 10 points to change from +1</button>
            </div>
        )
    }
}

export default Pay;