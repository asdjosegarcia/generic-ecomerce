import React from 'react'
import ShareSVG from '@/SVG/ShareSVG'
import './CircleButton.css'

const CircleButton = (props) => {
    return (
            <button onClick={props.function} className={`CircleButton ${props.className}`}>
                {props.icon}
            </button>
    )
}

export default CircleButton
