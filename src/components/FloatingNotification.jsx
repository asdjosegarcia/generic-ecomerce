import React from 'react'
import CloseSVG from '@/SVG/CloseSVG'
import CheckCompleteSVG from '@/SVG/CheckCompleteSVG'
import './FloatingNotification.css'

const FloatingNotification = (notificationText,error) => {
  return (
    <div className='floating-notifaction__container'>
        <p>Texto de test </p>
        {(!error)?<CloseSVG></CloseSVG>:<CheckCompleteSVG width={'40px'} fill={'green'}></CheckCompleteSVG> }


    </div>
  )
}

export default FloatingNotification