import React from 'react'

const Task = ({ text }) => {
    const styles = {
        container: {
            background: 'grey',
            padding: '10px'
        },
    }
    return (
        <div style={styles.container}>
            {text}
        </div>
    )
}

export default Task