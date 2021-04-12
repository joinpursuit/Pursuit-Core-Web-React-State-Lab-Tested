import React from 'react'
import { nativeTouchData } from 'react-dom/test-utils'

import './App.css'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      count: 0,
      starter: 1,
      visibility: 'hidden',
      display: 'flex'
    }
  }

  handleClick = () => {
    if (this.state.count + this.state.starter < 100) {
      this.setState({ count: this.state.count + this.state.starter })
    } else {
      this.setState({ count: this.state.count + this.state.starter })
      this.setState({ visibility: 'visible' })
      this.setState({ display: 'none' })
    }
  }

  increaseLoad = () => {
    if (this.state.count >= 10) {
      this.setState({ starter: this.state.starter + 1 })
      this.setState({ count: this.state.count - 10 })
    } else {
      window.alert(`You can't afford that!`)
    }
  }

  playAgain = () => {
    this.setState({ visibility: 'hidden' })
    this.setState({ display: 'flex' })
    this.setState({ count: 0 })
    this.setState({ starter: 1 })
  }

  render () {
    return (
      <div>
        <h1>Current Score: {this.state.count}</h1>
        <button
          onClick={this.handleClick}
          style={{ display: `${this.state.display}`,width : '15%', alignSelf: 'center' }}
        >
          +{this.state.starter}
        </button>
        <br/>
        <button
          onClick={this.increaseLoad}
          style={{ display: `${this.state.display}`}}
        >
          Pay 10 points to change from +{this.state.starter} to +
          {this.state.starter + 1}
        </button>
        <h2 style={{ visibility: `${this.state.visibility}` }}>You Win!</h2>
        <button
          style={{ visibility: `${this.state.visibility}` }}
          onClick={this.playAgain}
        >
          Play again?
        </button>
      </div>
    )
  }
}

export default App
