import React, { useState, useEffect } from "react";

const CurrentScore = () => {
  const [currentscore, setCurrentscore] = useState(0);
  const [buttonscore, setButtonscore] = useState(1);
  const [showText, setShowText] = useState(false);

  const playAgain = () => {
    setCurrentscore(0);
    setButtonscore(1);
    setShowText(false);
    // this.setState({ currentscore: 0, buttonscore: 1, showText: false });
  };


  const increment = () => {
    setCurrentscore(currentscore + buttonscore);
    // this.setState({
    //   currentscore: this.state.currentscore + this.state.buttonscore,
    // });
  };

  const incrementButton = () => {
    setButtonscore(buttonscore + 1);
    // this.setState({ buttonscore: this.state.buttonscore + 1 });
  };

  const decrement = () => {
    if (currentscore < 10) {
      return alert("You can't afford that!");
    } else {
    setCurrentscore(currentscore - 10);
    //   let { buttonscore } = this.state;
    setButtonscore(buttonscore + 1)
    //   this.setState({ buttonscore: buttonscore + 1 });
     }
  };

  // const { currentscore, showtext } = this.state;
  return (
    <div>
      <h3>Current Score: {currentscore}</h3>
      <div></div>
      {currentscore < 100 && (
        <button onClick={increment}> +{buttonscore}</button>
      )}

      <br></br>
      {currentscore < 100 && (
        <button onClick={decrement}>
          {" "}
          Pay 10 points to change from +{buttonscore} to +
          {buttonscore + 1}{" "}
        </button>
      )}
      <br></br>
      <div>
        {currentscore >= 100 && <h2>You Win!</h2>}
        {currentscore >= 100 && (
          <button onClick={playAgain}>Play again?</button>
        )}
      </div>
    </div>
  );
};


export default CurrentScore;


