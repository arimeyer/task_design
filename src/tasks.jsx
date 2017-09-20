import React from 'react'

const Tasks = ({ children }) => {
    const styles = {
        container: {
            gridArea: 'task',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'scroll',
        }
    }
    return (
        <div style={styles.container}>
            {children}
        </div>
    )
}

export default Tasks