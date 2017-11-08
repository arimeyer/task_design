import math from 'mathjs'

const fakeTaskText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`

export default () => Array(20).fill(fakeTaskText).map(text => ({text, id: Math.floor(Math.random()*500)}))

const task = (content, start, end) => ({ content, start, end })

const timeToMinutes = time => 

