import React from 'react';


function User(props){
    const { name } = props
    return(
        <li>
            {name}, Good Luck!
            {props.userId}
            {props.email}
        </li>
    )

}

export default User;