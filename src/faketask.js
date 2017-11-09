const fakeTaskText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`

export default () => Array(20).fill(fakeTaskText).map(text => ({text, id: Math.floor(Math.random()*500)}))





