'use client'
import React, { useState, useContext, useEffect } from 'react'
import './Navbar.css'
import SearchInput from '@/components/molecules/SearchInput'
import MenuSVG from '@/SVG/MenuSVG'
import CartSVG from '@/SVG/CartSVG'
import NotificationSVG from '@/SVG/NotificationSVG'
import Link from 'next/link'
import MobileMenu from '@/components/templates/MobileMenu'
import FloatingNotification from '@/components/atoms/FloatingNotification';
import { variableContext } from "@/context/contexto";
import LoadUserData from '@/components/atoms/LoadUserData'
import QuestionCardMenu from './QuestionCardMenu'
import DesktopMenu from '../templates/DesktopMenu'
import { useSession } from "next-auth/react";




let desktop = false
let onlyRequest = true
let username="Login"
const Navbar = () => {
    const [getMobileMenu, setMobileMenu] = useState(false)
    const [getImgSrc, setImgSrc] = useState(true)
    const { data: session } = useSession();
    const [getDesktopMenu, setDesktopMenu] = useState(false)
    const contexto = useContext(variableContext)

    ///////////////////////////detectar tamaño de pantalla
    const windowSize = () => {
        if (window.innerWidth > 800) {//si es mayor a 800 estamos en desktop
            desktop = true
            setDesktopMenu(true)
        } else {
            setDesktopMenu(false)
        }
    }
    if(typeof window !== 'undefined'){// si windows no es un defined, esto para evitar errores al generar el build, ya que da problemas por no estar en un navegaor sino en el servidor
        window.addEventListener('resize', function (event) { //detecta cuando el tamaño de la pantalla cambia y ejecuta
            windowSize()
        });
    }

    ///////////////////////////////establecer imagen,username,tamaño de ventana del usuario
    useEffect(() => {
        windowSize()//etecta si estamos en desktop o mobile
        const request = async () => {
            console.log('peticion');
            const res = await fetch(`/api/user/profile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userEmail: session?.user?.email }),
            });
            const data = await res.json();
            username=data.username //cargamos el nombre de usuario
            if (data.userProfileImg?.data?.data) { //si hay datos en la imagen del usuario
                setImgSrc(contexto.bytesToBase(data.userProfileImg.data.data, data.userProfileImg.mimetype))
                sessionStorage.setItem('imgSrc', contexto.bytesToBase(data.userProfileImg.data.data, data.userProfileImg.mimetype));
                sessionStorage.setItem('username',data.username );
            } else {
                const requestImgApi = async () => {
                    const response = await fetch(`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${data.username[0]}&size=480`);
                    const blob = await response.blob(); // obtenemos los datos binarios como un blob, ya que es una imagen no podemos usar .json
                    const reader = new FileReader(); //creamos una instancia de reader,(permite leer archivos o datos)
                    reader.readAsDataURL(blob); // leemos la imagen como base64
                    reader.onloadend = () => {//cuando se complete la lectura ejecuta
                        // const base64data = reader.result; //resultado de la lectura
                        setImgSrc(reader.result)//cargamos el resultado de la lectura (base64) a el imgSrc
                        sessionStorage.setItem('imgSrc', reader.result);
                        sessionStorage.setItem('username',data.username );
                    }
                }
                requestImgApi()
            }
        }

        if (session && onlyRequest && !sessionStorage.getItem('imgSrc')) {//si unica peticion es true y session tiene algo
            request()
            onlyRequest = false
        } else {
            username=sessionStorage.getItem('username')
            setImgSrc(sessionStorage.getItem('imgSrc'));

        }
    }, [session])

    return (
        <>
            {contexto.getBackground &&
                <div onClick={() => contexto.setBackground(false)} className='nav__black-background'>
                    <QuestionCardMenu></QuestionCardMenu>
                </div>
            }
            <LoadUserData></LoadUserData>
            {contexto.getNotificationText && <FloatingNotification />}
            <nav className='nav__container'>
                <Link /* legacyBehavior */ href='/'>
                    <img className='ecomerce__icon' src='/img/open-trade-1.jpg' alt='Opentrade icon' /* onClick={()=>{router.push('/')}} */ />
                </Link>
                <SearchInput></SearchInput>
                <div className='nav__buttons-container' alt='search bar'>
                    <Link href='/cart/'>
                        {/* <button className='nav_button' onClick={() => {}}> */}
                        <CartSVG width={'40px'} height={'40px'} fill={'#696969'}></CartSVG>
                        {/* </button> */}
                    </Link>
                    {getDesktopMenu ?
                        <>
                            <Link href={'/user/notifications'} className='nav_desktop-notifications-button-link'>
                                    <NotificationSVG width={'40px'} height={'40px'} fill={"#696969"}></NotificationSVG>
                            </Link>
                            <Link href={'/user/profile'}>
                            <img src={getImgSrc} className='nav_desktop-profile-img'></img>
                            <p className='nav_desktop-profile-username'>{username}</p>
                            </Link>
                        </>
                        :
                        <button className='nav_button' onClick={() => { setMobileMenu(!getMobileMenu) }}>
                            <MenuSVG width={'40px'} height={'40px'} fill={'#696969'} ></MenuSVG>
                        </button>
                    }
                </div>
            </nav>
            {getDesktopMenu &&
                <DesktopMenu />
            }
            {getMobileMenu && (<MobileMenu setMobileMenu={setMobileMenu} imgSrc={getImgSrc}></MobileMenu>)}
        </>
    )
}

export default Navbar