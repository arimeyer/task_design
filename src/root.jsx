import React from 'react'
import Schedule from './schedule.jsx'
import NavBar from './navbar.jsx'
import Tasks from './tasks.jsx'

const Root = () => {
    const styles = {
        container: {
            display: 'grid',
            gridTemplateAreas: 
                `"nav nav nav nav nav"
                 "task day day day day"
                 "task day day day day"
                 "task day day day day"
                 "task day day day day"`,
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