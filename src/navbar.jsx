import React from 'react'

const NavBar = ({ gridArea }) => {
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

export default NavBar