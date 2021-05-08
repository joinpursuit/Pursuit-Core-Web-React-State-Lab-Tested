

const FinalScore = ({score, setScore, setValue}) => {
 
  
  const restart = () => {
    setScore(0)
    setValue(1)
  };
  
    return (
      <main className="App">
        <h1>Current Score: {score}</h1>
        <h2>You Win!</h2>
        <button onClick={restart}>Play again?</button>
      </main>
    );
  
}

export default FinalScore;
