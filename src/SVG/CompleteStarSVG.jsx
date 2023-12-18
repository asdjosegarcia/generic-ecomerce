import React from 'react'

const CompleteStarSVG = (props) => {
  return (
<svg width={props.width} height={(props.width)?props.width: "24px"} fill={props.fill} viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg" stroke={props.fill} strokeWidth="0.00232">
<g id="SVGRepo_bgCarrier" strokeWidth="0"/>
<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke={props.fill} strokeWidth="0.96">
<path  d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z "/>
</g>
<g id="SVGRepo_iconCarrier">
<path   d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z"/>
</g>
</svg>
    )
}

export default CompleteStarSVG