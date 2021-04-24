
import React from "react"
import './App.css'





class App extends React.Component {
  constructor() {
    super()
    this.state = {
      score: 0,
      currentCount: 1
    }
  }

  handleClick = (num) => {
    this.setState((prevState) => {
      return { score: prevState.score + this.state.currentCount }
    })
  }
  payTen = (num) => {
    this.setState((prevState) => {
      if (this.state.score >= 10) {
        return { score: prevState.score - 10, currentCount: prevState.currentCount + 1 }
      } else {
        alert("You can't afford that!")
      }
    })
  }
  replay = () => {
    this.setState(() => {
      return { score: 0, currentCount: 1 }
    })
  }

  render() {
    if (this.state.score <= 99) {
      return (
        <div className="game">
          <h2>Current Score: {this.state.score}</h2>
          <button onClick={this.handleClick}>+{this.state.currentCount}</button>
          <button onClick={this.payTen}>Pay 10 points to change from +{this.state.currentCount} to +{this.state.currentCount + 1}</button>
        </div>
      )
    } else {
      return (
        <div className={"won"}>
          <h2>You Win!</h2>
          <button onClick={this.replay}>Play again?</button>
        </div>
      )
    }
  }
}

export default App














// import React from "react"
// import jokesData from './jokesData'
// import Joke from './Joke'

//  const jokeComponent = jokesData.map((joke, i)=>{
//    return(
//      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>
//    )
//  })
// function App(){

//     return (
//         <div>
//         {jokeComponent}    
//         </div>
//     )
// }

// export default App


















// import React from "react";

// import "./App.css";
// import Time from './TodoList.js'


// import User from "./User.js";
// const fakeTodos = [
//   "boop a kitty",
//   "omg",
//   "watch a video",
//   "eat Lunch",
//   "jump rope routine",
//   "meditate"
// ]

// class App extends React.Component {
//   constructor(){
//     super()

//     this.state = {
//       todos: []

//     }
//   }

  // changeColor = () => {
  //   const { colorIndex } = this.state;
  //   const nextIndex = (colorIndex + 1) % 3;

  //   this.setState({
  //     todos: []
  //   });

  // };

//   addTodos = ()=> {
//     let randomNumber = Math.floor(Math.random() * fakeTodos.length)
//     let randomTodo = fakeTodos[randomNumber]
//     let newState = [...this.state.todos]
//     newState.push({name: randomTodo, complete: false})
//     this.setState({ todos: newState })
//   }

//  completedTodo = (e)=>{
//   console.log(e.target.dataset.index)
//   let newState = [...this.state.todos]
//   if(newState[e.target.dataset.index].complete = false){
//     newState[e.target.dataset.index].complete = true
//   }else {newState[e.target.dataset.index].complete = false}
//   // newState[e.target.dataset.index].complete = true
//   this.setState({ todos: newState })
//  }
//   render () {
//     return (
//       <div>
//         <Time />
//         <h1>Todo List</h1>
//         <ul>
//           {this.state.todos.map((todo, i) => {
//             let completed = ""
//             if(todo.complete) {
//               completed = "completed"
//             }
//             return <li className = {completed} onClick={this.completedTodo} data-index={i}>{todo.name}</li>
//             })
//           }
//         </ul>
//         <button onClick={this.addTodos}>button</button>
//       </div>
//     );
//   }
// }


// export default App
