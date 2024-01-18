'use client'
import React, { useState,useContext } from 'react'
import './Navbar.css'
import SearchInput from '../components/SearchInput'
import MenuSVG from '../SVG/MenuSVG'
import CartSVG from '../SVG/CartSVG'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import FloatingNotification from '@/components/FloatingNotification';
import { variableContext } from "@/context/contexto";




const Navbar = () => {
    const [getMobileMenu, setMobileMenu] = useState(false)
    const contexto = useContext(variableContext)


    // let mobileMenuOn=null
    return (
        <>
            {contexto.getNotificationText && <FloatingNotification/> }
            <nav className='nav__container'>
                <Link /* legacyBehavior */ href='/'>
                    <img className='comerce__icon' src='/img/open-trade-1.jpg' alt='Opentrade icon' /* onClick={()=>{router.push('/')}} */ />
                </Link>
                <SearchInput></SearchInput>
                <div className='nav__buttons-container' alt='search bar'>
                    <button className='nav_button' onClick={() => { setMobileMenu(!getMobileMenu) }}>
                        <MenuSVG width={'40px'} height={'40px'} fill={'#696969'} ></MenuSVG>
                    </button>
                    <Link href='/cart/'>
                        {/* <button className='nav_button' onClick={() => {}}> */}
                            <CartSVG width={'40px'} height={'40px'} fill={'#696969'}></CartSVG>
                        {/* </button> */}
                    </Link>
                </div>
                {/* <div>ubicación</div> */}
                {/*         <ul>
            <li>Categorias</li>
            <li>Ofertas</li>
            <li>Historial</li>
            <li>Supermercado</li>
            <li>Vender</li>
            <li>Ayuda</li>
        </ul> */}
                {/* <span>imagen promocional</span> */}

                {/*         <ul className='personal-menu'>
            <li>Crea tu cuenta</li>
            <li>Ingresá</li>
            <li>Mis compras</li>
            <li>🛒</li>
        </ul> */}
            </nav>
            {getMobileMenu && (<MobileMenu setMobileMenu={setMobileMenu}></MobileMenu>)}

        </>


    )
}

export default Navbar