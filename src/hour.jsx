import React from 'react'
import Task from './task.jsx'

export default ({ label, children }) => {
    const size = 40
    const styles = {
        container: {
            flex: '1',
            borderTop: '1px solid grey',
            fontFamily: 'Arial, san-serif',
            color: 'grey',
            fontSize: '10px',
            position: 'relative',
        },
        hourLabel: {
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'white',
            top: `${-1 * (size / 2)}px`,
            left: `${(size / 2)}px`,
            width: `${size}px`,
            height: `${size}px`,
        }
    }
    return (
        <div style={styles.container}>
            <div style={styles.hourLabel}>{label}</div>
            {children}
        </div>
    )
}
