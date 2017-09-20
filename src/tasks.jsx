import React from 'react'

const Tasks = ({ children }) => {
    const styles = {
        container: {
            gridArea: 'task',
            background: 'blue'
        }
    }
    return (
        <div style={styles.container}>
        </div>
    )
}

export default Tasks