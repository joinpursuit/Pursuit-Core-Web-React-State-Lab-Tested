import React from "react"

function Product(props) {
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </div>
    )
    
    
}

export default Product









// import React from "react"

// function Joke(props) {
//     return (
//         <div>
//             <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
//             <h3 style={{color: !props.question && "#888888"}}>Answer: {props.punchLine}</h3>
//             <hr/>
//         </div>
//     )
// }

// export default Joke