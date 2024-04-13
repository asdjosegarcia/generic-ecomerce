'use client'
import React, { useState,useContext } from 'react'
import './Navbar.css'
import SearchInput from '@/components/molecules/SearchInput'
import MenuSVG from '@/SVG/MenuSVG'
import CartSVG from '@/SVG/CartSVG'
import Link from 'next/link'
import MobileMenu from '@/components/templates/MobileMenu'
import FloatingNotification from '@/components/atoms/FloatingNotification';
import { variableContext } from "@/context/contexto";
import LoadUserData from '@/components/atoms/LoadUserData'
// import  from '../molecules/QuestionCard'
import QuestionCardMenu from './QuestionCardMenu'
import DesktopMenu from '../templates/DesktopMenu'



let desktop=false
const Navbar = () => {
    const [getMobileMenu, setMobileMenu] = useState(false)
    // const [getDesktopMenu, setDesktopMenu] = useState(false)

    const contexto = useContext(variableContext)
    // const windowWidth=window.innerWidth;
    if(window.innerWidth>800){
        desktop=true
    }

    return (
        <>
        {contexto.getBackground &&
        <div onClick={()=>contexto.setBackground(false)} className='nav__black-background'>
            <QuestionCardMenu></QuestionCardMenu>
        </div>
        }
        <LoadUserData></LoadUserData>
            {contexto.getNotificationText && <FloatingNotification/> }
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
                    <button className='nav_button' onClick={() => { setMobileMenu(!getMobileMenu) }}>
                        <MenuSVG width={'40px'} height={'40px'} fill={'#696969'} ></MenuSVG>
                    </button>
                </div>
            </nav>
             {desktop && <DesktopMenu/>}
            {getMobileMenu && (<MobileMenu setMobileMenu={setMobileMenu}></MobileMenu>)}
        </>


    )
}

export default Navbar