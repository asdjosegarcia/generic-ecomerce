import React from 'react'
import './MainButton.css'

const MainButton = ({text,funct}) => {
  return (
    <button onClick={()=>funct} className='MainButton'>{text}</button>
  )
}

export default MainButton