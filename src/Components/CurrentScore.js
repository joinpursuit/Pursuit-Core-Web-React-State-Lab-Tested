import React, { useState } from "react";

// with hooks 

const CurrentScore = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const resetScore = () => {
    setCount(0);
    setIncrement(1);
  };

  const changeScore = () => {
    if (count < 100) {
      setCount((prevCount) => {
        return prevCount + increment 

      });
    } else {
      return;
    }
  };

  const tenPointChange = () => {
    if (count >= 10) {
          setIncrement((prevIncrement) => prevIncrement + 1 ) 
          setCount((prevCount)=> prevCount - 10) 
        } else {
      window.alert("You can't afford that!");
    }
  }
  

  const gamePlay = (
    <div>
      <h2>Current Score: {count}</h2> <br></br>
      <button onClick={changeScore}>+{increment}</button> <br></br>
      <button onClick={tenPointChange}>
        Pay 10 points to change from +{increment} to +{increment + 1}
      </button>
    </div>
  );

  const wonGame = (
    <div>
      <h2>You Win!</h2> <br></br>
      <button onClick={resetScore}>Play again?</button>
    </div>
  );

  return <div>{count < 100 ? gamePlay : wonGame}</div>;
};

export default CurrentScore;
