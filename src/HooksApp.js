import React, { useState, useEffect } from 'react'
import './App.css'

const HooksApp = () => {
    const [count, setCount] = useState(0);
    const [width, setWidth] = useState(window.innerwidth)
    const [pay, setPay] = useState(window.alert)
    // const handleIncrement = () => {
    //   setCount(count + 1)


    //   const handleDecrement = () => {
    //       setCount(count - 1)
    //   }

    const handleCount = (num) => {
        setCount(count + num)
    }
    
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return ()=> {
            window.removeEventListener('resize', handleResize)
        }


        const handleAlert = () => {
            if (setCount < 10) {

                setPay('You cant afford that')
            } else {
                setPay(setCount - 10)
            }
            
        }
        window.addEventListener('alert', handleAlert)

        // return () => {
        //     window.alert
        // }
    }, [count])

    return (
        <div className='App'>
            <h1>Hooks Counter</h1>
            <h2>{count}</h2>
            <button onClick={() => handleCount(-1)}> - </button>
            <button onClick = {() => handleCount(1)}> + </button>
            <h2>Window Width: {width} px</h2>
        </div>
    )
}       

export default HooksApp;


