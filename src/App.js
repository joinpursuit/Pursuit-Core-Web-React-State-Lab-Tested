import React, {Component} from "react";

import "./App.css";

export default class App extends Component {
  constructor(){
    super()
  
    this.state={
      totalNumber: 0,
      addnumber: 1,
      addnumber2: 2 
    }
  }
  handleclick =()=>{
    let nextnum = this.state.totalNumber + this.state.addnumber
    if(nextnum >=10){
      alert`You can't afford that!`
    }else{
      this.setState({
        totalNumber: nextnum}) 
    }

    // this.setState({
    //   totalNumber: nextnum}) 
  }
  secondBTN =()=>{
    let secadd = this.state.addnumber +1
    let three = this.state.addnumber2 +1

    this.setState({
      addnumber: secadd,
      addnumber2: three
    })

  }


  render() {
  let win = ""
  if(this.state.totalNumber >=100){
    win = 'YOU WIN'
  }else{
    return (
      <div>
        <h1>Current Score: {this.state.totalNumber}</h1>
        <button onClick={this.handleclick}>+{this.state.addnumber}</button>
        <button onClick={this.secondBTN}>Pay 10 points to change from +{this.state.addnumber} to +{this.state.addnumber2} </button>
        <h2>{win}</h2>
      </div>
    )
  }
    
  }
}


