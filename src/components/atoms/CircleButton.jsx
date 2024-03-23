import React from 'react'
import ShareSVG from '@/SVG/ShareSVG'
import './CircleButton.css'

const CircleButton = (props) => {
    const styles={
        "backgroundColor":`${props.backgroundColor}`
    }
    return (
            <button style={styles} onClick={props.function} className={`CircleButton ${props.className}`}>
                {props.icon}
            </button>
    )
}

export default CircleButton
