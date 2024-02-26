'use client'
import React from 'react'
import './MainButton.css'

const MainButton = ({text,funct,icon}) => {
  return (
    <button onClick={funct} className='MainButton'>{text}&nbsp;{icon}</button>
  )
}

export default MainButton