import {useState} from "react";
import  "./ClickerGame.css"

const ClickerGame =() =>{
    const [score, setScore] = useState(0)
    const [button1, setButton1] =useState(1)

    const increment = () =>{
        if(score < 100){
           setScore( score + button1)
            }
        }

    const decrement10 = () => {
         if(score >=10){
         setScore(score-10)
         setButton1(button1 + 1)
         } else {
             alert("You can't afford that")
         }
    }    

       const  playAgain = () =>{
        setScore(0)
        setButton1(1)
    } 

        if(score<=100){
            return (
            <div>
                <h1>Current Score: {score}</h1>
                <button onClick={increment}>+{button1}</button>
                <button onClick={decrement10}>Pay 10 points to change from +{button1} to +{button1 +1}</button>
                
            </div>
            
            )

        } else {
            return (
                <div>
                    <h1>Current Score: {score}</h1>
                    <h2>You Win!</h2>
                    <button onClick={playAgain}>Play again?</button>
                </div>
            )
        }
        

}

export default ClickerGame
    






// class ClickerGame extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {score:0, button1:1}
//     }

//     increment= () => {
//         const {score, button1} =this.state
//         if(score < 100){
//             this.setState({score: score + button1})
//         }
//     }

//     decrease10 = () => {
//         const {score, button1} = this.state

//         if(score >=10){
//         this.setState({score:score-10, button1: button1 + 1})
//         } else {
//             alert("You can't afford that")
//         }
//     }

//     playAgain = () =>{
//         this.setState({score:0, button1:1})

//     }
//     render(){
//         const {score, button1} =this.state
//         if(score<=100) {
//         return (
//             <div className="Game">
//                 <h1>Current Score: {score} </h1>
//                 <button onClick = {this.increment}>+{button1}</button>
//                 <button onClick = {this.decrease10}>Pay 10 points to change from +{button1} to +{button1 +1}</button>

//             </div>
           
//         )
//     } else {
//         return (
//             <div className="reset">
//                 <h1>Current Score: {score} </h1>
//                 <h2>You Win!</h2>
//                 <button onClick = {this.playAgain}>Play again?</button>
//             </div>
//         )
//     }
// }
// }

// export default ClickerGame