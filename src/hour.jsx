import React from 'react'
import Task from './task.jsx'
import styled from 'styled-components'
import SCHDULE_LABEL_SIZE from './ui_constants.js'

const size = SCHDULE_LABEL_SIZE

const Container = styled.div`
    border-top: 1px solid grey;
    font-family: Arial, san-serif;
    color: grey;
    font-size: 10px;
    position: relative;
`

const Label = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    top: ${-1 * (size / 2)}px;
    left: ${(size / 2)}px;
    width: ${size}px;
    height: ${size}px;
`

export default ({ label, children }) => {
    return (
        <Container>
            <Label>{label}</Label>
        </Container>
    )
}
