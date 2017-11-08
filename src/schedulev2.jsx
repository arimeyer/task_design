import React from 'react'
import styled from 'styled-components'
import hours from './hours.js'
import Hour from './hour.jsx'
import { HOURS_ON_SCREEN } from './ui_constants.js'

const SCHEDULE_HEIGHT_VH = 2400 / HOURS_ON_SCREEN
const HOUR_HEIGHT_VH = 100 / HOURS_ON_SCREEN

const OuterContainer = styled.div`
    grid-area: ${({gridArea}) => gridArea};
    overflow-y: scroll;
`
const InnerContainer = styled.div`
    height: ${SCHEDULE_HEIGHT_VH}vh;
    position: relative;
    display: grid;
    grid-template-rows: repeat(24, ${HOUR_HEIGHT_VH}vh);
`

export default ({ gridArea, tasks }) => {
    return (
        <OuterContainer {...{gridArea}}>
            <InnerContainer>
                <div></div>
                {hours.map((x, i) => <Hour key={i} label={x} />)}
            </InnerContainer>
        </OuterContainer>
    )
}

/**
 * tasks: {top, left, content: {text, time}}[]
 */