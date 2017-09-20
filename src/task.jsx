import React from 'react'

const Task = ({ text }) => {
    const styles = {
        container: {
            flex: '1',
            padding: '15px 15px 0 15px'
        },
        textBox: {
            padding: '10px',
            background: 'grey'
        }
    }
    return (
        <div style={styles.container}>
            <div style={styles.textBox}>{text}</div>
        </div>
    )
}

export default Task