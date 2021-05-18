// import React from "react";

// import "./App.css";

// class App extends React.Component {
//   constructor () {
//   super()

//   this.state = {
//     totalNumber: 0,
//     value: 1,
//     };
//   }


//   handleClick = () => {
//     this.setState({ totalNumber: this.state.totalNumber + this.state.value});
// {



//   render() {
//     return (
//       <div>
//         <h1>Current Score: {this.totalNumber}</h1>
//         <button>+1</button>
//         <button>Pay 10 Points to increase from +1 to +2</button>
//       </div>
//     )
//   }
// }

// export default App;

import React, { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(1);

  function incrementCounter() {
    setCounter(counter + value)
  }

  function pointsSpent() {

    if(counter >= 10) {
      setCounter(counter - 10);
      setValue(value + 1)
    } else {
      alert(`You can't afford that`);
    }
  }

  function resetGame() {
    setCounter(0);
    setValue(1)
  }

  if (counter < 100) {
    return (
      <div>
        <h1>Current Score: {counter}</h1>
        <button onClick={incrementCounter}> + {value} </button>
        <button onClick={pointsSpent}>Pay 10 Points to increase from +{value} to {value + 1} </button>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Current Score: {counter}</h1>
        <h2>You Won!</h2>
        <button onClick={resetGame}>Play again?</button>
      </div>
    )
  }

}
