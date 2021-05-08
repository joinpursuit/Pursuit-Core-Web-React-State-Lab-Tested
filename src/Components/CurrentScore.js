import React, { useState, useEffect } from "react";

const CurrentScore = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const resetScore = () => {
    setCount(0);
    setIncrement(1);
  };

  const changeScore = () => {
    if (count <= 100) {
      setCount((prevCount) => {
        return prevCount + increment;
      });
    }
  };

  const tenPointChange = () => {
    if (count >= 10) {
      setCount((prevCount) => {
        return count - 10;
      });
      setIncrement((prevIncrement) => {
        return increment + 1;
      });
    } else {
      window.alert("You can't afford that!");
    }
  };

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
