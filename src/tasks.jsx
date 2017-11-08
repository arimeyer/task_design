import React from 'react'
import styled from 'styled-components'

export default styled.div`
    grid-area: ${({gridArea}) => gridArea};
    display: grid;
    overflow-y: scroll;
    grid-gap: 15px;
    padding: 15px;
`
