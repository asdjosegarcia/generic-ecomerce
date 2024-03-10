import Link from 'next/link'
import React from 'react'
import './UserNotificationCardZero.css'
import { useRouter } from 'next/navigation';

let cardStyle;
const UserNotificationCardZero = (props) => {
  const router = useRouter()
  console.log(props.notification);
  /////////////////////comprobacion sobre si el usuario vio la notificacion
  if(props.notification.view){
    cardStyle={"color":'gray'}
  }
  /////////////////////fecha
  const date = new Date(props.notification.createdAt); //creamos un objeto con new date que tiene funciones
  const options = {
      weekday: "long", // 'short', 'long', 'narrow' como se va a mostrar el dia de la semana
      year: "numeric", // '2-digit', 'numeric' como se va a mostrar el año
      month: "numeric", // 'short', 'long', 'numeric', '2-digit' como se  va a mostrar el mes
      day: "numeric", // '2-digit', 'numeric' como se va a mostrar el dia
  };
  const formatedDate = date.toLocaleDateString("en-US", options); //en-US formato de region, en este caso eeuu
  /////////////////////redireccionamiento
  const redirect=(e)=>{
    e.preventDefault()
      // fetch(`/api/favorites/${session.user.email}`)//realizamos una peticion get a parametro de la url.id
      //     .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
      //     .then(data => {
      //         setProducts(data.products)
      //         setLoading(false)
      //         // console.log(data.products)
      //     })

    router.push(props.notification.link)

  }

  return (
    <div className='UserNotificationCardZero' style={cardStyle}>
        <a href={props.notification.link} onClick={redirect} className='UserNotificationCardZero__Link'>
        <h3 className='UserNotificationCardZero__title'>{props.notification.title}</h3>
        <p className='UserNotificationCardZero__description'>{props.notification.description}</p>
        <span className='UserNotificationCardZero__date'>{formatedDate}</span>
        </a>
    </div>
  )
}

export default UserNotificationCardZero
