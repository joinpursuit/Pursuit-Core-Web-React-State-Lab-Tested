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
  increment=()=>{
    this.setState({totalNumber:this.state.totalNumber + this.state.addnumber})
  }
  handleclick =()=>{
    let nextnum = this.state.totalNumber + this.state.addnumber
    if(nextnum >=10){
      this.setState({
      totalNumber: this.state.totalNumber-10, addnumber: this.state.addnumber +1, addnumber2: this.state.addnumber2 +1}) 
    }else{
      alert(`You can't afford that!`)
    }
  }

  playagain=()=>{
    this.setState({
      totalNumber: 0,
      addnumber: 1,
      addnumber2: 2 })
  }


  render() {
  if(this.state.totalNumber <100){
    return (
      <div className='App'>
        <h1>Current Score: {this.state.totalNumber}</h1>
        <button onClick={this.increment}>+{this.state.addnumber}</button>
        <button onClick={this.handleclick}>Pay 10 points to change from +{this.state.addnumber} to +{this.state.addnumber2} </button>
      </div>
    )
  }else{
    return(
      <div className='reset'>
        <h1>Current Score: {this.state.totalNumber}</h1>
        <h2 >You Win!</h2>
        <button onClick={this.playagain}>Play again?</button>
      </div>
    )
    
  }
    
  }
}


