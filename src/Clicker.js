import React, { Component } from 'react'
import "./Clicker.css";

export default class Clicker extends Component {
    constructor(){
        super();
        
        this.state = {
            count:0,
            countBy:1,
            showHideIncrementButtons:true,
            showHideVictoryMessage:false
        };
    }

    incrementCount = () => {
        const {count, countBy} = {...this.state}
        if(count >= 100){
            this.setState({
                showHideIncrementButtons:false,
                showHideVictoryMessage:true
            });
        }else{
            this.setState({
                count:this.state.count + countBy
            });
        }
    };

    incrementCountBy = () => {
        const {count} = this.state;
        if(count >= 10){
            this.setState({
                count:this.state.count - 10,
                countBy:this.state.countBy + 1
            });
        }else{
            alert("You can't afford that!");
        }
    };
    
    reset = () =>{
        this.setState(
            {
                count:0,
                countBy:1,
                showHideIncrementButtons:true,
                showHideVictoryMessage:false
            }
        );
    }
    
    render() {
        const {count, countBy, showHideVictoryMessage, showHideIncrementButtons} = this.state;
        
        return (
            
            <div className="clicker-div">
                <h1>
                    Current Score: {count}
                </h1>
                {showHideIncrementButtons && (
                    <>
                        <button onClick={this.incrementCount}>+{countBy}</button>
                        <br/><br/>
                        <button onClick={this.incrementCountBy}>Pay 10 points to change from +{countBy} to +{countBy+1}</button>
                        <br/>
                    </>
                )}
                {showHideVictoryMessage && (
                <>
                    <h2>You Win!</h2>
                    <button onClick={this.reset}>Play again?</button>
                </>
                )}
            </div>
            
        )
                
    }
}
