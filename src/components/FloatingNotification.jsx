import React, { useState } from 'react'
import CloseSVG from '@/SVG/CloseSVG'
import CheckCompleteSVG from '@/SVG/CheckCompleteSVG'
import './FloatingNotification.css'

const FloatingNotification = (props) => {
  const [getClearNotify, setClearNotify] = useState(null)
  setTimeout(() => {
    setClearNotify(true)
  }, 400);

  return (
    <div className={`floating-notifaction__container ${(getClearNotify) ? 'hidden' : ''}`} >
      <p>{props.notificationText ? props.notificationText : ''} </p>
      {(props.error) ? <CloseSVG></CloseSVG> : <CheckCompleteSVG width={'40px'} fill={'green'}></CheckCompleteSVG>}
    </div>
  )
}

export default FloatingNotification