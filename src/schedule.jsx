import React from 'react'
import Hour from './hour.jsx'
import hours from './hours.js'

const Schedule = () => {
    const styles = {
        outerContainer: {
            borderTop: '1px solid grey',
            borderBottom: '1px solid grey',
            gridArea: "day",
            overflowY: 'scroll'
        },
        innerContainer: {
            display: 'flex',
            flexDirection: 'column',
            height: '300%'          
        }
    }
    return (
        <div style={styles.outerContainer}>
            <div style={styles.innerContainer}>
                {hours.map((x, i) => <Hour key={i} label={x} />)}
            </div>
        </div>
    )
}

export default Schedule