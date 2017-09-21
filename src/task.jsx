import React from 'react'

export default ({ text }) => {
    const styles = {
        container: {
            background: 'grey',
            padding: '10px'
        }
    }
    return (
        <div style={styles.container}>
            {text}
        </div>
    )
}

