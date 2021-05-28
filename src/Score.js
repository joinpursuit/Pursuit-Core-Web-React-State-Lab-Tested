import React, { useState } from "react";

const Score = () => {
  const [button1Value, setButton1Value] = useState(1);
  const [count, setCount] = useState(0);

  const incrementCountBy1 = () => {
    setCount(count + button1Value);
  };
  const incrementButtonBy1 = () => {
    if (count < 10) {
      alert("You can't afford that!");
    } else {
      setButton1Value(button1Value + 1);
      setCount(count - 10);
    }
  };

  const reset = () => {
    setCount(0);
    setButton1Value(1);
  };

  if (count >= 100) {
    return (
      <div>
        <h2>You Win!</h2>
        <button onClick={reset}>Play again?</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Current Score: {count}</h1>
        <button onClick={incrementCountBy1}>+{button1Value}</button>
        <button onClick={incrementButtonBy1}>
          Pay 10 points to change from +{button1Value} to +{button1Value + 1}
        </button>
      </div>
    );
  }
};

export default Score;
