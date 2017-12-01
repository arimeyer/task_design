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
    display: grid;
    grid-template-rows: repeat(1440 , 1fr);
    grid-template-columns: repeat(${({columns}) => columns}, 1fr)
`

const Item = styled.div`
    grid-row-start: ${({start}) => start};
    grid-row-end: ${({end}) => end};
    grid-column-start: ${({})}
`

const getColumns = items => items.reduce((a, x) => a*x)

export default ({ gridArea, items }) => {
    const columns = getColumns(items)
    return (
        <OuterContainer {...{gridArea}}>
            <InnerContainer columns={columns}>
                
            </InnerContainer>
        </OuterContainer>
    )
}

/**
 * tasks: {top, left, content: {text, time}}[]
 * 
 * 
 * 
 * 
 * <div></div>
                {hours.map((x, i) => <Hour key={i} label={x} />)}
 */