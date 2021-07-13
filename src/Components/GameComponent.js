import { useState } from "react";
const GameComponent = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const resetScore = () => {
    setCount((prevCount) => 0);
    setIncrement((prevIncrement) => 1);
  };

  const changeScore = () => {
    if (count <= 100) {
      setCount((prevCount) => prevCount + increment);
    } else {
      return;
    }
  };

  const tenPointChange = () => {
    if (count >= 10) {
      setCount((prevCount) => prevCount - 10);
      setIncrement((prevIncrement) => prevIncrement + 1);
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
export default GameComponent;

// import React from "react";
// class GameComponent extends React.Component {
//     state = { count: 0, increment: 1 };
//   resetScore = () => {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count - prevState.count,
//         increment: prevState.increment - prevState.increment + 1,
//       };
//     });
//   };
//   changeScore = () => {
//     if (this.state.count <= 100) {
//       this.setState((prevState) => {
//         return { count: prevState.count + this.state.increment };
//       });
//     } else {
//       return;
//     }
//   };
//   tenPointChange = () => {
//     if (this.state.count >= 10) {
//       this.setState((prevState) => {
//         return {
//           increment: prevState.increment + 1,
//           count: this.state.count - 10,
//         };
//       });
//     } else {
//       window.alert("You can't afford that!");
//     }
//   };
//   render() {
//     const gamePlay = (
//       <div>
//         <h2>Current Score: {this.state.count}</h2> <br></br>
//         <button onClick={this.changeScore}>+{this.state.increment}</button>{" "}
//         <br></br>
//         <button onClick={this.tenPointChange}>
//           Pay 10 points to change from +{this.state.increment} to +
//           {this.state.increment + 1}
//         </button>
//       </div>
//     );
//     const wonGame = (
//       <div>
//         <h2>You Win!</h2> <br></br>
//         <button onClick={this.resetScore}>Play again?</button>
//       </div>
//     );
//     return <div>{this.state.count < 100 ? gamePlay : wonGame}</div>;
//   }
// }
// export default GameComponent;

// using Hooks
// import { useState } from "react";

// const GameComponent = () => {
//   const [score, useScore] = useScore(0)
//     // this.state = {
//     //   score: 0,
//     //   incrementAmount: 1,
//       // newAmount: 2,
//       // startOver: "",
//       // win: false,
//     // };
//   // }

//   increment = () => {
//     // if (this.state.score >= 100) {

//     this.setState({ score: this.state.score + this.state.incrementAmount });
//   };

//   incrementButton = () => {
//     if (this.state.score < 10) {
//       alert("You can't afford that!");
//     } else {
//       this.setState({ incrementAmount: this.state.incrementAmount + 1 });
//       this.setState({ newAmount: this.state.newAmount + 1 });
//       this.setState({ score: this.state.score - 10 });
//     }
//   };

//   playAgain = () => {
//     this.setState({ startOver: "Play Again!" });
//     this.setState({ win: true });
//     this.setState({ score: 0 });
//     this.setState({incrementAmount: + 1});
//     this.setState({ newAmount: + 2});
//   };

//     if (this.state.score < 100) {
//       return (
//         <div>
//           <h2>Current Score: {this.state.score}</h2>
//           <button onClick={this.increment}>
//             +{this.state.incrementAmount}
//           </button>
//           <button onClick={this.incrementButton}>
//             Pay 10 points to change from +{this.state.incrementAmount} to +
//             {this.state.newAmount}
//           </button>
//         </div>
//       );
//     } else {
//       return (
//         <section>
//           <h2>You Win!</h2>
//           <button onClick={this.playAgain}>Play again?</button>
//         </section>
//       );
//     }

// }

// export default GameComponent;

// import React from "react";

// class GameComponent extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {
//       score: 0,
//       incrementAmount: 1,
//       newAmount: 2,
//       startOver: "",
//       win: false,
//     };
//   }
//   increment = () => {
//     // if (this.state.score >= 100) {

//     this.setState({ score: this.state.score + this.state.incrementAmount });
//   };

//   incrementButton = () => {
//     if (this.state.score < 10) {
//       alert("You can't afford that!");
//     } else {
//       this.setState({ incrementAmount: this.state.incrementAmount + 1 });
//       this.setState({ newAmount: this.state.newAmount + 1 });
//       this.setState({ score: this.state.score - 10 });
//     }
//   };

//   playAgain = () => {
//     this.setState({ startOver: "Play Again!" });
//     this.setState({ win: true });
//     this.setState({ score: 0 });
//     this.setState({incrementAmount: + 1});
//     this.setState({ newAmount: + 2});
//   };

//   render() {
//     if (this.state.score < 100) {
//       return (
//         <div>
//           <h2>Current Score: {this.state.score}</h2>
//           <button onClick={this.increment}>
//             +{this.state.incrementAmount}
//           </button>
//           <button onClick={this.incrementButton}>
//             Pay 10 points to change from +{this.state.incrementAmount} to +
//             {this.state.newAmount}
//           </button>
//         </div>
//       );
//     } else {
//       return (
//         <section>
//           <h2>You Win!</h2>
//           <button onClick={this.playAgain}>Play again?</button>
//         </section>
//       );
//     }
//   }
// }

// export default GameComponent;
