import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root.jsx'
import fakeTask from './faketask.js'


ReactDOM.render(<Root unscheduled={Array(20).fill(fakeTask)}/>, document.getElementById('app'))