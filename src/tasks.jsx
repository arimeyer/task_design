import React from 'react'

const Tasks = ({ children, gridArea }) => {
    const styles = {
        container: {
            gridArea,
            display: 'grid',
            overflowY: 'scroll',
            gridGap: '15px',
            padding: '15px'
        }
    }
    return (
        <div style={styles.container}>
            {children}
        </div>
    )
}

export default Tasks