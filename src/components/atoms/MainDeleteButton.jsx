'use client'
import React from 'react'
import './MainDeleteButton.css'

const MainDeleteButton = ({text,funct,icon}) => {
  return (
    <button onClick={funct} className='MainDeleteButton'>{text}&nbsp;{icon}</button>
  )
}

export default MainDeleteButton