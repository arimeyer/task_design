import React from 'react'

export default NavBar = ({ gridArea }) => {
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

