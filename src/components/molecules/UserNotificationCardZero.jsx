import Link from 'next/link'
import React from 'react'
import './UserNotificationCardZero.css'

const UserNotificationCardZero = (props) => {

    console.log(props.notification);
  return (
    <div className='UserNotificationCardZero'>
        <Link href={props.notification.link} className='UserNotificationCardZero__Link'>
        <h3 className='UserNotificationCardZero__title'>{props.notification.title}</h3>
        <p className='UserNotificationCardZero__description'>{props.notification.description}</p>
        <span>Hoy</span>
        </Link>
    </div>
  )
}

export default UserNotificationCardZero
