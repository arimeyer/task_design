import React from 'react'

const Hour = ({label}) => {
    const styles = {
        container: {
            flex: '1',
            borderBottom: '1px solid grey',
            fontFamily: 'Arial, san-serif',
            color: 'grey',
            fontSize: '10px',
            position: 'relative'
        },
        hourLabel: {
            position: 'absolute',
            background: 'white',
            top: '-6.5px',
            left: '10px',
            width: '40px',
            textAlign: 'center'
        }
    }
    return (
        <div style={styles.container}>
            <span style={styles.hourLabel}>{label}</span>
        </div>
    )
}
export default Hour