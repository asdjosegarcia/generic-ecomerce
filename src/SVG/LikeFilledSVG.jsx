import React from 'react'

const LikeFilledSVG = (props) => {
    return (
        <>
            <svg width={props.width} height={props.height} fill={props.fill} className='LikeFilledSVG' xmlns="http://www.w3.org/2000/svg" viewBox="0 3 24 20"><path d="M3,21a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H6V21ZM19.949,10H14.178V5c0-2-3.076-2-3.076-2s0,4-1.026,5C9.52,8.543,8.669,10.348,8,11V21H18.644a2.036,2.036,0,0,0,2.017-1.642l1.3-7A2.015,2.015,0,0,0,19.949,10Z"/></svg>
        </>
    )
}

export default LikeFilledSVG