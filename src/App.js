import React from "react";
import Clicker from "./Clicker"
import ClickerHooks from "./ClickerHooks"
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Clicker /> */}
        <ClickerHooks />
      </div>
    );
  }
}

export default App;
