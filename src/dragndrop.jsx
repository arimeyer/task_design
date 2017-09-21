import React, { Component } from 'react'

export default Wrapped => class extends Component {
    constructor() {
        super()
        this.state = {
            position: {
                x: 0,
                y: 0
            }
        }
    }
    render() {
        return (
            <div>
                <Wrapped />
            </div>
        )
    }
}

