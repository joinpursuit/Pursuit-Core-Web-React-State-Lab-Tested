import {useState} from "react";
import MainGame from "./components/MainGame";
import FinalScore from "./components/FinalScore";
import "./App.css";
 
const App = () => {
  const [score, setScore] = useState(0)
  const [value, setValue] = useState(1)
  
    if (score < 100) {
      return (
        <MainGame score={score} setScore={setScore} value={value} setValue={setValue}/>
      );
    } else {
      return (
        <FinalScore score={score} setScore={setScore} value={value} setValue={setValue}/>
      );
    }
  
}

export default App;
