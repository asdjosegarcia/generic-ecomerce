import React, { useState,useContext } from 'react'
import CloseSVG from '@/SVG/CloseSVG'
import CheckCompleteSVG from '@/SVG/CheckCompleteSVG'
import './FloatingNotification.css'
import { variableContext } from "@/context/contexto";


const FloatingNotification = (props) => {
  const contexto = useContext(variableContext)
  const [getClearNotify, setClearNotify] = useState(null)
  setTimeout(() => {//una vez concluio el tiempo
    setClearNotify(true)//agegamos la clase hidden y ocultamos la notificacion de manera progresiva
  }, 400);
  setTimeout(() => { 
    contexto.setNotificationText(null)//elimina la notificacion, para poder ejecutar nuevas
  }, 2300);


  return (
    <>
      { contexto.getNotificationText &&
      <div className={`floating-notifaction__container ${getClearNotify ? 'hidden' : ''}`} >
        <p>{contexto.getNotificationText ? contexto.getNotificationText : ''} </p>
        {(props.error) ? <CloseSVG></CloseSVG> : <CheckCompleteSVG width={'40px'} fill={'green'}></CheckCompleteSVG>}
      </div>
      }
    </>

  )
}

export default FloatingNotification