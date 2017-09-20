import React from 'react'

const Hour = ({label}) => {
    const styles = {
        container: {
            flex: '1',
            borderTop: '1px solid grey',
            borderBottom: '1px solid grey',
        }
    }
    return (
        <div style={styles.container}>
            <span>{label}</span>
        </div>
    )
}
export default Hour