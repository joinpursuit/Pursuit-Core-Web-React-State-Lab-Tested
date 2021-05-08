import React, { useState, useEffect } from "react";
const ClickerHooks = ({ props }) => {
  const [score, setScore] = useState(0);
  const [payPoints, setPayPoints] = useState(1);
  const [addPoints, setAddPoints] = useState(2);
  const increment = () => {
    setScore(score + payPoints);
  };
  const payTen = () => {
    if (score >= 10) {
      setScore(score - 10);
      setPayPoints(payPoints + 1);
      setAddPoints(addPoints + 1);
    } else {
      alert(`You can't afford that!`);
    }
  };
  const playAgain = () => {
    setScore(0);
    setPayPoints(1);
    setAddPoints(2);
  };
  if (score < 100) {
    return (
      <div>
        <h1>Current Score: {score}</h1>
        <p>
          <button onClick={increment}>+{payPoints}</button>
        </p>
        <p>
          <button onClick={payTen}>
            Pay 10 points to change from +{payPoints} to +
            {addPoints}
          </button>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Current Score: {score}</h1>
        <h2>You Win!</h2>
        <button onClick={playAgain}>Play again?</button>
      </div>
    );
  }
};
export default ClickerHooks;