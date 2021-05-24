import {useState} from "react";

import "./App.css";

/* class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentValue: 0,
      addedValue: 1
    }
  }
  buttonClick = () => {
    this.setState({
      currentValue: this.state.currentValue + this.state.addedValue
    })
  }
  pointChangeClick = () => {
    if (this.state.currentValue >= 10) {
      this.setState({
        currentValue: this.state.currentValue - 10,
        addedValue: this.state.addedValue + 1
      })
    }
    else {
      alert(`You can't afford that!`)
    }
  }
  restart = () => {
    this.setState({
      currentValue: 0,
      addedValue: 1
    })
  }
  render() {
    if(this.state.currentValue < 100) {
      return(
      <div>
        <h1>Current Score: {this.state.currentValue}</h1>
        <button onClick={this.buttonClick}>+{this.state.addedValue}</button>
        <button onClick={this.pointChangeClick}>Pay 10 points to change from +{this.state.addedValue} to +{(this.state.addedValue + 1)}</button>

      </div>
      )
    }
    else {
      return(
      <>
        <h1>Current Score: {this.state.currentValue}</h1>
        <h2>You Win!</h2>
        <button onClick={this.restart}>Play again?</button>
      </>
      
      )
    }
  }
}

export default App;
*/

export default function App() {
  const [currentValue, setCurrentValue] = useState(0)
  const [addedValue, setAddedValue] = useState(1)
  const buttonClick = () => {
    setCurrentValue(currentValue + addedValue)
  }
  const pointChangeClick = () => {
    if (currentValue >= 10) {
        setCurrentValue(currentValue - 10)
        setAddedValue(addedValue + 1)
    }
    else {
      alert(`You can't afford that!`)
    }
  }
  const restart = () => {
      setCurrentValue(0)
      setAddedValue(1)
  }
  if(currentValue < 100) {
    return(
    <div>
      <h1>Current Score: {currentValue}</h1>
      <button onClick={() => buttonClick()}>+{addedValue}</button>
      <button onClick={() => pointChangeClick()}>Pay 10 points to change from +{addedValue} to +{(addedValue + 1)}</button>

    </div>
    )
  }
  else {
    return(
    <>
      <h1>Current Score: {currentValue}</h1>
      <h2>You Win!</h2>
      <button onClick={() => restart()}>Play again?</button>
    </>
    
    )
  }
}

