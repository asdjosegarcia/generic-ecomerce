import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import './UserNotificationCardTen.css'
import { useRouter } from 'next/navigation';

let cardStyle;
const UserNotificationCardTen = (props) => {
  const router = useRouter()
  const [getStyle,setStyle]=useState({})
  // console.log(props.notification);
  // console.log({id:props.notification.id, view:props.notification.view});
  /////////////////////comprobacion sobre si el usuario vio la notificacion
   useEffect(() => {//evitar re-renderizados
     if(props.notification.view){
       setStyle({"color":'gray'})//se aplcua con un useState para evitar que se apliquen los estilos en todos las card
     }
   }, [props.notification.view])
   
  /////////////////////fecha
  const date = new Date(props.notification.createdAt); //creamos un objeto con new date que tiene funciones
  const options = {
    //   weekday: "long", // 'short', 'long', 'narrow' como se va a mostrar el dia de la semana
      year: "numeric", // '2-digit', 'numeric' como se va a mostrar el año
      month: "numeric", // 'short', 'long', 'numeric', '2-digit' como se  va a mostrar el mes
      day: "numeric", // '2-digit', 'numeric' como se va a mostrar el dia
  };
  const formatedDate = date.toLocaleDateString("en-US", options); //en-US formato de region, en este caso eeuu
  /////////////////////redireccionamiento + view=true
  const redirect=async(e)=>{
    e.preventDefault()
      const request=async ()=>{//hacemos una request para cambiar el view por true, indicando que el usuario ya vio la notificacion
        const res = await fetch(`/api/user/notifications`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userEmail:props.userEmail,id:props.notification.id}),
        });
        const data = await res.json();
        // console.log("notification:", data)
         router.push(props.notification.link)//redireccionamos a el usuario a el link de la notificacion
      }
      request()

  }

  return (
    <div className='UserNotificationCardTen' style={getStyle}>
        <a  onClick={redirect} className='UserNotificationCardTen__Link'>
        <img src={props.notification.icon} className='UserNotificationCardTen__icon'></img>
        <h3 className='UserNotificationCardTen__title'  style={getStyle}>{props.notification.title}</h3>
        <p className='UserNotificationCardTen__description'  style={getStyle}>{props.notification.description}</p>
        <span className='UserNotificationCardTen__date'  style={getStyle}>{formatedDate}</span>
        </a>
    </div>
  )
}

export default UserNotificationCardTen
