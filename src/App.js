import React from "react";
import CurrentScore from "./Components/CurrentScore"

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className= "App">
        <CurrentScore />
      </div>
    );
  }
}

export default App;
