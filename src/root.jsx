import React from 'react'
// import Schedule from './schedule.jsx'
import NavBar from './navbar.jsx'
import Tasks from './tasks.jsx'
import Task from './task.jsx'
import styled from 'styled-components'
import Schedule from './schedulev2.jsx'


const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr 13fr;
    grid-template-columns: 1fr 6fr;
    grid-template-areas: 
        "nav nav"
        "task day";
    height: 100vh;
    width: 100vw;
`

export default ({schedule, tasks}) => {
    return (
        <Container>
            <NavBar gridArea="nav" />
            <Tasks gridArea="task" >
                {tasks.map(({text, id: key}) => <Task {...{text, key}} />)}
            </Tasks>
            <Schedule gridArea="day" schedule={schedule} />
        </Container>
    )
}

