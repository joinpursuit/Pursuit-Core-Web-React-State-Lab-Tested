import React, {useState} from 'react'

const Clicker = () => {
    const [currentScore, setCurrentScore] = useState(0)
    const [pointsButton, setPointsButton] = useState(1)
    const [paymentButton, setPayButton] = useState(2)
    
    
    const playAgain = () => {
        setCurrentScore(0)
        setPointsButton(1)
        setPayButton(2)
    }

    const addPoints  = () => {
        setCurrentScore((prevCurrentScore) => prevCurrentScore + pointsButton)
    }

    const paymeButton = () => {
        if(currentScore >= 10){
            setCurrentScore((prevCurrentScore) => prevCurrentScore - 10)
            setPointsButton((prevPointsButton) => prevPointsButton + 1)
            setPayButton((prevPayButton) => prevPayButton + 1)
            
        } else {
            alert(`You can't afford that!`)
        }
    };

        if(currentScore < 100) {
            return (
                <div>
                    <h1>Current Score: {currentScore}</h1>
                    <button onClick={addPoints}>+{pointsButton}</button>
                    <p>
                    <button onClick={paymeButton}>Pay 10 points to change from +{pointsButton} to +{paymentButton}</button>
                    </p>
                </div>
                    )

        } else {
            return (
                <div>
                    <h1>Current Score: {currentScore}</h1>
                    <h2>You Win!</h2>
                    <p>
                        <button onClick={playAgain}>Play again?</button>
                    </p>
                </div>
            )
        }
    }


export default Clicker

