import React from 'react'

const Tasks = ({ children, gridArea }) => {
    const styles = {
        container: {
            gridArea,
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