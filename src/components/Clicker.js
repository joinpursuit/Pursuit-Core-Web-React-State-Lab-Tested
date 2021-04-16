import { render } from '@testing-library/react'
import React from 'react'


class Clicker extends React.Component {
    constructor() {
        super()
        this.state = {
            currentScore: 0,
            
        }
    }

    render() {
        return (
            <div>
                <header>Current Score: {this.state.currentScore}</header>
            </div>
        ) 
    }

}

export default Clicker