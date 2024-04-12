'use client'
import React, { useEffect, useState, useContext } from 'react'
import './UserProfilePage.css'
import { useSession } from 'next-auth/react';
import { variableContext } from "@/context/contexto";
import CopySVG from '@/SVG/CopySVG';
import AddPhotoSVG from '@/SVG/AddPhotoSVG';
import CircleButton from '@/components/atoms/CircleButton';
import ShareSVG from '@/SVG/ShareSVG';
import ArchiveSelector from '@/components/molecules/ArchiveSelector';
import MainButton from '@/components/atoms/MainButton';
import UploadSVG from '@/SVG/UploadSVG';
import CloseSVG from '@/SVG/CloseSVG';
import FloatingNotification from '@/components/atoms/FloatingNotification';
import Loading from '@/components/templates/Loading';


let createdAt;
let updatedAt;
let profileimg;
const page = () => {
  const { data: session } = useSession();//cargamos datos del usuario en session   
  const [getUserData, setUserData] = useState()
  const [getAddImage, setAddImage] = useState(false)
  const [getProfileImg, setProfileImg] = useState('')
  const [getImage, setImage] = useState()
  const [getLoading, setLoading] = useState(true)
  const contexto = useContext(variableContext)


  //////////////////////peticion datos del usuario
  useEffect(() => {
    const request = async () => {
      const res = await fetch(`/api/user/profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail: session?.user.email }),
      });
      const data = await res.json();
      setLoading(false)
      setUserData(data)
      // console.log(await data)
      /////////////////////segunda peticion en caso de que le usuario no tenga imagen de perfil
      if (data.userProfileImg?.data) {
        setProfileImg(contexto.bytesToBase(data.userProfileImg.data.data, data.userProfileImg.mimetype))
      } else {
        setProfileImg(`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${data.username[0]}&size=480`)
      }
    }
    if (session?.user) {
      request()
    }
  }, [session])


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
        // contexto.setNotificationIcon(<CheckCompleteSVG width={'40px'} fill={'green'}/>)
        contexto.setNotificationText('Text copied to clipboard')

      })
      .catch((err) => {
        contexto.setNotificationIcon(<CloseSVG width={'40px'} fill={'red'} />)
        contexto.setNotificationText('Error to coppy', err)

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
  /////////////////////////Update Picture
  const imageUpdater = () => {
    // console.log(getImage);
    if (getImage) { //verificamos que tengamos una iamgen cargada en el input
      const request = async () => {
        const res = await fetch(`/api/user/profile`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userEmail: session?.user.email,
            imgMimetype: getImage.imgType,
            imgData: getImage.imgData,
          }),
        });
        const data = await res.json();
        setUserData(data)
        // console.log(await data)
        if (res.ok) {
          setAddImage(false)//cerramos el menu
          setProfileImg('data:' + getImage.imgType + ';base64,' + getImage.imgData)
          sessionStorage.setItem('imgSrc', 'data:' + getImage.imgType + ';base64,' + getImage.imgData)
          console.log('perfileImg', contexto.bytesToBase(getImage.imgData, getImage.imgType));
          contexto.setNotificationText('Picture Updated')
          // setReload(!getReload)
        } else {
          contexto.setNotificationText('Error')
        }
      }
      request()

    } else {
      contexto.setNotificationIcon(<></>)
      contexto.setNotificationText('Add a picture before')
    }

  }


  return (
    <>
      {(getLoading) ?
        <Loading />
        :
        <div className='UserProfilePage'>
          {getUserData &&
            <>
              <section className='UserProfilePage__section-img'>
                <img className='UserProfilePage__img' src={getProfileImg}></img>
                <CircleButton className='UserProfilePage__img-edit' icon={<AddPhotoSVG />} function={() => { setAddImage(true) }} backgroundColor={"white"} />
                {/* <button className='UserProfilePage__img-edit' >
            
          </button> */}
              </section>
              {getAddImage &&
                <div className='UserProfilePage__add-image--container'>
                  <CircleButton icon={<CloseSVG />} backgroundColor={"white"} function={() => setAddImage(false)}></CircleButton>
                  <ArchiveSelector type={"image"} getImage={getImage} setImage={setImage} />
                  <MainButton text={"Update Picture"} funct={imageUpdater} icon={<UploadSVG />}></MainButton>
                </div>
              }
              <h1 className='UserProfilePage__username'>{getUserData.username}</h1>
              <span>ID: {getUserData.id}</span>
              <span>Email: {getUserData.email}</span>
              <span>CreatedAt: {createdAt}</span>
              <span>Last Update: {updatedAt}</span>

              <section className='UserProfilePage__extra-options'>
                {/* <button onClick={() => { copyText(); }}>Copy <CopySVG width={"15px"}></CopySVG> </button> */}
                <CircleButton function={() => copyText()} icon={<CopySVG />} />
                <CircleButton function={() => compartirEnlace()} icon={<ShareSVG />} />
              </section>
            </>
          }

        </div>
      }
    </>
  )
}

export default page
