import React from "react";
import CurrentScore from "./Components/CurrentScore"
import CurrentScore2 from "./Components/CurrentScore2"

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <section>
        <h2>No Hooks</h2>
     <CurrentScore2/>
     <h2>With Hooks</h2>
    <CurrentScore />
      </section>
    )
  }
}

export default App;
