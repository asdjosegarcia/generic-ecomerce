'use client'
import React, { useEffect, useState, useContext } from 'react'
import './UserProfilePage.css'
import { variableContext } from "@/context/contexto";
import CopySVG from '@/SVG/CopySVG';
import AddPhotoSVG from '@/SVG/AddPhotoSVG';
import CircleButton from '@/components/atoms/CircleButton';
import ShareSVG from '@/SVG/ShareSVG';



let createdAt;
let updatedAt;
let profileimg;
const page = () => {
  const [getUserData, setUserData] = useState()
  const contexto = useContext(variableContext)
  //////////////////////peticion datos del usuario
  useEffect(() => {
    const request = async () => {
      const res = await fetch(`/api/user/profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail: "user8@gmail.com" }),
      });
      const data = await res.json();
      setUserData(data)
      console.log(await data)
      /////////////////////segunda peticion en caso de que le usuario no tenga imagen de perfil
      if (data.userProfileImg) {
        profileimg =/* data.userProfileImg */ ''
      } else {
        profileimg = `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${data.username[0]}&size=480`
      }
    }
    request()
  }, [])


  //////////////////////Manejo de fechas
  if (getUserData?.createdAt) {
    createdAt = contexto.dateIsoToShort(getUserData.createdAt, "en-US")
    updatedAt = contexto.dateIsoToShort(getUserData.updatedAt, "en-US")
  }
  ///////////////////////Copiar Texto
  const copyText = () => {
    const text = `ID: ${getUserData.id} \nEmail: ${getUserData.email} \nCreatedAt: ${createdAt} \nLast Update: ${updatedAt}`;
    navigator.clipboard.writeText(text) //usamos API Clipboard para copiar el texto a el portapapeles del usuario
      .then(() => {
        // Mostrar un mensaje de éxito
        alert("Texto copiado al portapapeles!");
      })
      .catch((err) => {
        // Manejar cualquier error que pueda ocurrir
        console.error("Error al copiar texto: ", err);
      });
  }
  ////////////////////////Compartir usuario
  function compartirEnlace() {
    // URL que deseas compartir
    let url = /* window.location.href */'http://localhost:3000/user/profile';

    // Verificar si el navegador soporta la API de Web Share
    if (navigator.share) {
      // Usar la API de Web Share para compartir
      navigator.share({
        title: 'Título del enlace',
        url: url
      }).then(() => {
        console.log('Enlace compartido exitosamente');
      }).catch((error) => {
        console.error('Error al compartir enlace:', error);
      });
    } else {
      // Si el navegador no soporta la API de Web Share, mostrar un mensaje alternativo
      alert('Tu navegador no soporta la función de compartir enlace.');
    }
  }
  


  return (
    <div className='UserProfilePage'>
      {getUserData &&
        <>
          <section className='UserProfilePage__section-img'>
            <img className='UserProfilePage__img' src={profileimg}></img>
            <CircleButton className='UserProfilePage__img-edit' icon={<AddPhotoSVG />} backgroundColor={"white"} />
            {/* <button className='UserProfilePage__img-edit' >
            
          </button> */}
          </section>
          <h1 className='UserProfilePage__username'>{getUserData.username}</h1>
          <span>ID: {getUserData.id}</span>
          <span>Email: {getUserData.email}</span>
          <span>CreatedAt: {createdAt}</span>
          <span>Last Update: {updatedAt}</span>

          <section className='UserProfilePage__extra-options'>
            {/* <button onClick={() => { copyText(); }}>Copy <CopySVG width={"15px"}></CopySVG> </button> */}
            <CircleButton function={() => copyText()}  icon={<CopySVG />} />
            <CircleButton function={() => compartirEnlace()} icon={<ShareSVG />} />
          </section>
        </>
      }

    </div>
  )
}

 export default page
