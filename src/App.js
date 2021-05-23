import React, { useState } from 'react'
import './App.css'

const App = () =>{
    const [ count, setCounter ] = useState(0)
    const [ starter, setStarter ] = useState(1)
    const [ visibility, setVisibility ] = useState('hidden')
    const [ display, setDisplay ] = useState('flex')

const  handleClick = () => {
    if (count + starter < 100) {
      setCounter( count + starter )
    } else {
      setCounter( count + starter )
      setVisibility( 'visible' )
      setDisplay( 'none' )
    }
  }

const increaseLoad = () => {
    if (count >= 10) {
      setStarter( starter + 1 )
      setCounter( count - 10 )
    } else {
      window.alert(`You can't afford that!`)
    }
  }

 const  playAgain = () => {
    setVisibility( 'hidden' )
    setDisplay( 'flex' )
    setCounter( 0 )
    setStarter( 1 )
  }

    return (
      <div>
        <h1>Current Score: {count}</h1>
        <button
          onClick={() => handleClick()}
          style={{ display: `${display}`,width : '15%', alignSelf: 'center' }}
        >
          +{starter}
        </button>
        <br/>
        <button
          onClick={() => increaseLoad()}
          style={{ display: `${display}`}}
        >
          Pay 10 points to change from +{starter} to +
          {starter + 1}
        </button>
        <h2 style={{ visibility: `${visibility}` }}>You Win!</h2>
        <button
          style={{ visibility: `${visibility}` }}
          onClick={() => playAgain()}
        >
          Play again?
        </button>
      </div>
    )
  }


export default App
