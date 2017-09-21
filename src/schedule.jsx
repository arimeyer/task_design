import React from 'react'
import Hour from './hour.jsx'
import hours from './hours.js'

const Schedule = ({ gridArea }) => {
    const styles = {
        outerContainer: {
            gridArea,
            overflowY: 'scroll'
        },
        innerContainer: {
            display: 'flex',
            flexDirection: 'column',
            height: '300%'          
        },
        offSet: {
            flex: '1',
            borderBottom: '1px solid grey',            
        }
    }
    return (
        <div style={styles.outerContainer}>
            <div style={styles.innerContainer}>
                <div style={styles.offSet}></div>
                {hours.map((x, i) => <Hour key={i} label={x} />)}
            </div>
        </div>
    )
}

export default Schedule