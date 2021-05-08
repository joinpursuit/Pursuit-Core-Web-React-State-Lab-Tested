const MainGame = ({ score, setScore, value, setValue }) => {
  const increment = () => {
    setScore(score + value);
  };

  const pay = () => {
    if (score >= 10) {
      setScore(score - 10);
      setValue(value + 1);
    } else {
      alert("You can't afford that!");
    }
  };

  return (
    <main className="App">
      <h1>Current Score: {score}</h1>
      <button onClick={increment}>+{value}</button>
      <button onClick={pay}>
        Pay 10 points to change from +{value} to +{value + 1}
      </button>
    </main>
  );
};

export default MainGame;
