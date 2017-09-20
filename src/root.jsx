import React from 'react'
import Schedule from './schedule.jsx'
import Hour from './hour.jsx'
import hours from './hours.js'

const Root = ({}) => {
    return (
        <div>
            <Schedule>
                {hours.map((x, i) => <Hour key={i} label={x} />)}
            </Schedule>
        </div>
    )
}

export default Root