import React from 'react'

const EmptyStarSVG = (props) => {
  return (
    <svg   viewBox="0 -960 960 960" width={props.width} height={(props.width)?props.width: "24px"} fill={props.fill}><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z" /></svg>
    )
}

export default EmptyStarSVG