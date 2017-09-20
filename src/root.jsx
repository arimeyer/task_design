import React from 'react'
import Schedule from './schedule.jsx'
import NavBar from './navbar.jsx'
import Tasks from './tasks.jsx'
import Task from './task.jsx'

import fakeTask from './faketask.js'

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
            <Tasks>
                {Array(20).fill(fakeTask).map((x, i) => <Task key={i} text={x} />)}
            </Tasks>
            <Schedule />
        </div>
    )
}

export default Root