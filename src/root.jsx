import React from 'react'
import Schedule from './schedule.jsx'
import NavBar from './navbar.jsx'
import Tasks from './tasks.jsx'

const Root = () => {
    const styles = {
        container: {
            display: 'grid',
            gridTemplateRows: '1fr 13fr',
            gridTemplateColumns: '1fr 6fr',
            gridTemplateAreas: 
                `"nav nav"
                 "task day"`,
            height: '100vh',
            width: '100vw'
        }
    }
    return (
        <div style={styles.container}>
            <NavBar />
            <Tasks />
            <Schedule />
        </div>
    )
}

export default Root