import React from "react"

function JokeGenerator(props) {
    console.log(props)
    return (
        <div className='jokeGenerator'>
            <h3 style={{display: props.setup.question? 'block': 'none'}}>Question: {props.setup.question}</h3>
            <h4>PunchLine: {props.setup.punchline}</h4>
            <hr />
        </div>   
      
    )
}

export default JokeGenerator