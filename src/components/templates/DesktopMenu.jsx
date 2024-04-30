'use client'
import React, { useContext, useEffect, useState } from 'react'
import './DesktopMenu.css'
import UserSVG from '@/SVG/UserSVG'
import Link from 'next/link'
import { useSession } from "next-auth/react";
import { signOut } from 'next-auth/react'//importamos la funcion que nos desloquea desde next-auth
import { variableContext } from "@/context/contexto";
import PlusSVG from '@/SVG/PlusSVG'
import HeartOutlineSVG from '@/SVG/HeartOutlineSVG'
import HomeSVG from '@/SVG/HomeSVG'
import SearchSVG from '@/SVG/SearchSVG'
import NotificationSVG from '@/SVG/NotificationSVG'
import TiketSVG from '@/SVG/TiketSVG'
import PorcentSVG from '@/SVG/PorcentSVG'
import OffSVG from '@/SVG/OffSVG'
import InventorySVG from '@/SVG/InventorySVG'
import CartSVG from '@/SVG/CartSVG'


let onlyRequest = true
const DesktopMenu = (props) => {
  const [getImgSrc, setImgSrc] = useState()
  const { data: session } = useSession();
  const contexto = useContext(variableContext)

  const searchFunc = () => {
    // props.setMobileMenu(false)
    contexto.focusSearch()
  }

  ///////////////////////////////establecer imagen de perfil del usuario
  // useEffect(() => {
  //   const request = async () => {
  //     const res = await fetch(`/api/user/profile`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ userEmail: session?.user?.email }),
  //     });
  //     const data = await res.json();
  //     // console.log(await data)
  //     if (data.userProfileImg?.data?.data) { //si hay datos en la imagen del usuario
  //       setImgSrc(contexto.bytesToBase(data.userProfileImg.data.data, data.userProfileImg.mimetype))
  //       sessionStorage.setItem('imgSrc', contexto.bytesToBase(data.userProfileImg.data.data, data.userProfileImg.mimetype));
  //     } else {
  //       const requestImgApi = async () => {
  //         const response = await fetch(`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${data.username[0]}&size=480`);
  //         const blob = await response.blob(); // obtenemos los datos binarios como un blob, ya que es una imagen no podemos usar .json
  //         const reader = new FileReader(); //creamos una instancia de reader,(permite leer archivos o datos)
  //         reader.readAsDataURL(blob); // leemos la imagen como base64
  //         reader.onloadend = () => {//cuando se complete la lectura ejecuta
  //           // const base64data = reader.result; //resultado de la lectura
  //           setImgSrc(reader.result)//cargamos el resultado de la lectura (base64) a el imgSrc
  //           sessionStorage.setItem('imgSrc',reader.result)
  //             ;
  //         }
  //       }
  //       requestImgApi()
  //     }
  //   }


  //   if (session && onlyRequest && !sessionStorage.getItem('imgSrc')) {//si unica peticion es true y session tiene algo
  //     request()
  //     onlyRequest = false
  //   } else {
  //     setImgSrc(sessionStorage.getItem('imgSrc'));
  //   }
  // }, [session])




  return (
    <>
      <div className='dektop-menu__container'>
        <div className='dektop-menu__options'>
          <Link href='/'>
            <button /* onClick={() => { props.setMobileMenu(false) }} */ >Home <HomeSVG width={'24px'} fill={"#696969"}></HomeSVG></button>
          </Link>
          {/* <input ref={inputRef}></input> */}
          <button onClick={searchFunc} className='dektop-menu__search-button' >Search <SearchSVG width={'24px'} fill={'#696969'}></SearchSVG></button>
          <Link href={'/user/notifications'} className='dektop-menu__notifications-button-link'>
            <button /* onClick={() => { props.setMobileMenu(false) }} */ >Notifications <NotificationSVG width={'24px'} fill={"#696969"}></NotificationSVG></button>
          </Link>
          <Link href='/user/purchases'>
            <button /* onClick={() => { props.setMobileMenu(false) }} */>My Shopping   <TiketSVG width={'24px'} fill={"#696969"}></TiketSVG> </button>
          </Link>
          <Link href='/user/products'>
            <button /* onClick={() => { props.setMobileMenu(false) }} */>My Products   <InventorySVG width={'24px'} fill={"#696969"}></InventorySVG> </button>
          </Link>
          <Link className='dektop-menu__cart-link' href='/cart'>
            <button /* onClick={() => { props.setMobileMenu(false) }} */>My Cart <CartSVG width={'24px'} fill={'#696969'}></CartSVG></button>
          </Link>

          <Link className='dektop-menu__Favorites-link' href='/favorites'>
            <button /* onClick={() => { props.setMobileMenu(false) }} */>Favorites <HeartOutlineSVG width={'24px'} fill={'#696969'}></HeartOutlineSVG></button>
          </Link>
          <Link href='/offers' >
            <button /* onClick={() => { props.setMobileMenu(false) }} */>Offers <PorcentSVG width={'24px'} fill={"#696969"}></PorcentSVG></button>
          </Link>
          {(!session?.user?.name) ?
            <>
              <Link href='/auth/login'>
                <button className="dektop-menu__trade-button" /* onClick={() => { props.setMobileMenu(false) }} */>Trade <PlusSVG width={'24px'} fill={"#696969"}></PlusSVG></button>
              </Link>
              <Link href='/auth/login'>
                <button /* onClick={() => { props.setMobileMenu(false) }} */>Login</button>
              </Link>
            </>
            :
            <>
              <Link href='/product/new/'>
                <button className="dektop-menu__trade-button" /* onClick={() => { props.setMobileMenu(false) }} */>Trade <PlusSVG width={'24px'} fill={"#696969"}></PlusSVG> </button>
              </Link>
              <button className="dektop-menu__logout-button" onClick={() => { /* props.setMobileMenu(false); */ signOut();sessionStorage.clear(); }}>Logout <OffSVG width={'24px'} fill={"#ff7b7b"}></OffSVG></button>
            </>
          }
        </div>
      </div>

    </>
  )
}

export default DesktopMenu