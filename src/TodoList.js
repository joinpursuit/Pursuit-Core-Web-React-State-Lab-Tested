import React from "react"
import TodoTaskList from './Component/TodoTaskList'



function Time (){
    const date = new Date(2018, 6, 31 , 23)
    const hours = (date.getHours())
    const mins = date.getMinutes()
    console.log('The time is:',hours,":" + mins)
    let timeOfDay
    const styles = {
        fontSize: 30
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = 'yellow'
    } else if (hours >= 12 && hours < 17) {
        timeOfDay ="afternoon"
        styles.color = 'red'
    } else {
        timeOfDay = 'night'
        styles.color = 'blue'
    }
    return(
        <div>
        <h2>Hello</h2>
        <p style={styles}>{`The time is: ${hours}: ${mins}`}</p>
        <TodoTaskList />
        </div>
    )
}
export default Time;