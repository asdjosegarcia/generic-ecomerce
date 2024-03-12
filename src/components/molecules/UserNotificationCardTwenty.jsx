import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import './UserNotificationCardTwenty.css'
import { useRouter } from 'next/navigation';

let imgSrc;
const UserNotificationCardTwenty = (props) => {
    // console.log(props.notification.product[0].previewImgBase.data.data);
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
      year: "2-digit", // '2-digit', 'numeric' como se va a mostrar el año
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
  /////////////////////byte to base64
  const byteArray = new Uint8Array(props.notification.product[0].previewImgBase.data.data);//creamos un Unit8Array que no almacena los array en grupos aunque asi lo mustre firefox, sino en un valor de 8bits/1 byte(datos binarios de 8 bits 0 a 255) ej 125,0,5,3,etc (datos codificados en bits)
  // console.log(byteArray)
  let binaryString = '';//almacenara un string, a cada string se le suma 1 caracter por cada 8bites/1byte gracias a String.fromCharCode que transforma cada byte en 1 caracter, los � son datos que el navegador no puede representar
  for (let i = 0; i < byteArray.length; i++) {//1 recorrido por cada byte
    binaryString += String.fromCharCode(byteArray[i]);//byteArray[i] nos dara cada byte, String.fromCharCode() transformara el byte de DECIMAL a caracter UTF-16,+= sumara el caracter a binaryString 
  }
  const base64String =  btoa(binaryString);//btoa() funcion que transforma caractes de UTF-16 c/u a Base64 
  imgSrc='data:'+props.notification.product[0].previewImgBase.mimetype+';base64,'+base64String //agregamos lo necesario para que se pueda representar en <img>

  return (
    <div className='UserNotificationCardTwenty' style={getStyle}>
        <a  onClick={redirect} className='UserNotificationCardTwenty__Link'>
        <img src={imgSrc} className='UserNotificationCardTwenty__icon'></img>
        <h3 className='UserNotificationCardTwenty__title'  style={getStyle}>{props.notification.title}</h3>
        <p className='UserNotificationCardTwenty__description'  style={getStyle}>{props.notification.description+' '+props.notification.product[0].title}</p>
        <span className='UserNotificationCardTwenty__date'  style={getStyle}>{formatedDate}</span>
        </a>
    </div>
  )
}

export default UserNotificationCardTwenty
