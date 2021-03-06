import React from 'react'
import Hour from './hour.jsx'
import hours from './hours.js'
import styled from 'styled-components'

const OuterContainer = styled.div`
    grid-area: ${({gridArea}) => gridArea};
    overflow-y: scroll;
`
const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 300%;
`

const Offset = styled.div`
    flex: 1;
`

export default ({ gridArea, tasks }) => {
    return (
        <OuterContainer {...{gridArea}}>
            <InnerContainer>
                <Offset/>
                {hours.map((x, i) => <Hour key={i} label={x} />)}
            </InnerContainer>
        </OuterContainer>
    )
}

