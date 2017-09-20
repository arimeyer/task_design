import React from 'react'

const Schedule = ({children}) => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid grey',
            borderBottom: '1px solid grey'
        }
    }
    return (
        <div style={styles.container}>
            {children}
        </div>
    )
}

export default Schedule