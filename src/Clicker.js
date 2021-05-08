import { useState }  from 'react';

const Clicker = () => {
    const [points, setPoints] = useState(0)
    const [pointsButton, setPointsButton] = useState(1)
    const [paymentButton, setPaymentButton] = useState(2)
    
    
    const playAgain = () => {
        setPoints(0)
        setPaymentButton(2)
        setPointsButton(1)
    }

    const encrement = () => {
        // const { points } = this.state
        setPoints((prevPoints) => prevPoints + pointsButton)
    }

    const pointsPayment = () => {
        if(points >= 10){
            setPoints((prevPoints) => prevPoints - 10)
            setPointsButton((prevPointsButton) => prevPointsButton + 2)
            setPaymentButton((prevPaymentButton) => prevPaymentButton + 1)
            
        } else {
            alert(`You can't afford that!`)
        }
    };

        if(points < 100) {
            return (
                <div>
                    <h1>Current Score: {points}</h1>
                    <button onClick={encrement}>+{pointsButton}</button>
                    <p>
                    <button onClick={pointsPayment}>Pay 10 points to change from +{pointsButton} to +{paymentButton}</button>
                    </p>
                </div>
                    )

        } else {
            return (
                <div>
                    <h1>Current Score: {points}</h1>
                    <h2>You Win!</h2>
                    <p>
                        <button onClick={playAgain}>Play again?</button>
                    </p>
                </div>
            )
        }
    }


export default Clicker