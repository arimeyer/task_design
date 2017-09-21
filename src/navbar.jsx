import React from 'react'

export default ({ gridArea }) => {
    const styles = {
        container: {
            gridArea,
            background: 'red'
        }
    }
    return (
        <div style={styles.container}>
        </div>
    )
}

