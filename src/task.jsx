import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background: grey;
    padding: 10px;
`

export default ({ text }) => {
    return (
        <Container>
            {text}
        </Container>
    )
}

