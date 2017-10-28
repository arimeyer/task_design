import React from 'react'
import Schedule from './schedule.jsx'
import NavBar from './navbar.jsx'
import Tasks from './tasks.jsx'
import Task from './task.jsx'


export default ({schedule, tasks}) => {
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
            <NavBar gridArea="nav" />
            <Tasks gridArea="task" >
                {tasks.map(({text, key: id}) => <Task {...{text, key}} />)}
            </Tasks>
            <Schedule gridArea="day" schedule={schedule} />
        </div>
    )
}

