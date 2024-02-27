'use client'
import React from 'react'
import './MainAddButton.css'

const MainAddButton = ({text,funct,icon}) => {
  return (
    <button onClick={funct} className='MainAddButton'>{text}&nbsp;{icon}</button>
  )
}

export default MainAddButton