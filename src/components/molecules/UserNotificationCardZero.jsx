import Link from 'next/link'
import React from 'react'
import './UserNotificationCardZero.css'

const UserNotificationCardZero = (props) => {

  const date = new Date(props.notification.createdAt); //creamos un objeto con new date que tiene funciones
  const options = {
      weekday: "long", // 'short', 'long', 'narrow' como se va a mostrar el dia de la semana
      year: "numeric", // '2-digit', 'numeric' como se va a mostrar el año
      month: "numeric", // 'short', 'long', 'numeric', '2-digit' como se  va a mostrar el mes
      day: "numeric", // '2-digit', 'numeric' como se va a mostrar el dia
  };
  const formatedDate = date.toLocaleDateString("en-US", options); //en-US formato de region, en este caso eeuu

    console.log(props.notification);
  return (
    <div className='UserNotificationCardZero'>
        <Link href={props.notification.link} className='UserNotificationCardZero__Link'>
        <h3 className='UserNotificationCardZero__title'>{props.notification.title}</h3>
        <p className='UserNotificationCardZero__description'>{props.notification.description}</p>
        <span className='UserNotificationCardZero__date'>{formatedDate}</span>
        </Link>
    </div>
  )
}

export default UserNotificationCardZero
