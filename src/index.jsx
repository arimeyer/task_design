import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root.jsx'
import fakeTasks from './faketask.js'


ReactDOM.render(<Root tasks={fakeTasks()}/>, document.getElementById('app'))