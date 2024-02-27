'use client'
import React, { useContext } from 'react'
import './MobileMenu.css'
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




const MobileMenu = (props) => {
  const { data: session } = useSession();
  const contexto = useContext(variableContext)

  // const inputRef = useRef(null)
  // const enfocarInput = () => {
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // };
  const searchFunc = () => {
    props.setMobileMenu(false)
    contexto.focusSearch()
  }

  // console.log(session)


  return (
    <>
      <div className="mobile-menu__background" onClick={() => { props.setMobileMenu(false) }}></div>
      <div className='mobile-menu__container'>
        <div className='mobile-menu__user' >
          <div className="mobile-menu__user-img">
            <UserSVG width={"100%"} fill={'#696969'}></UserSVG>
            {/* <img></img> */}
          </div>
          {(!session?.user?.name) ?
            <Link className='mobile-menu__username-link' href='/auth/login'>
              <button className="mobile-menu__username-button" onClick={() => { props.setMobileMenu(false) }}>Login</button>
            </Link>
            :
            <>
              <p className="mobile-menu__username">{session?.user?.name}</p>
              <a className="mobile-menu__user-profile" >{"My Profile >"}</a>
            </>
          }


        </div>
        <div className='mobile-menu__options'>
          <Link href='/'>
            <button onClick={() => { props.setMobileMenu(false) }} >Home <HomeSVG width={'24px'} fill={"#696969"}></HomeSVG></button>
          </Link>
          {/* <input ref={inputRef}></input> */}
          <button onClick={searchFunc} >Search <SearchSVG width={'24px'} fill={'#696969'}></SearchSVG></button>
          <button>Notifications <NotificationSVG width={'24px'} fill={"#696969"}></NotificationSVG></button>
          {(session?.user?.name) ?
            <>
              <Link  href='/user/purchases'>
                <button onClick={() => { props.setMobileMenu(false) }}>My Shopping   <TiketSVG width={'24px'} fill={"#696969"}></TiketSVG> </button>
              </Link>
              <Link  href='/user/products'>
                <button onClick={() => { props.setMobileMenu(false) }}>My Products   <InventorySVG width={'24px'} fill={"#696969"}></InventorySVG> </button>
              </Link>
              <Link className='mobile-menu__Favorites-link' href='/favorites'>
                <button onClick={() => { props.setMobileMenu(false) }}>Favorites <HeartOutlineSVG width={'24px'} fill={'#696969'}></HeartOutlineSVG></button>
              </Link>
            </>
            :
            <></>
          }
          <button>Offers <PorcentSVG width={'24px'} fill={"#696969"}></PorcentSVG></button>
          {(!session?.user?.name) ?
            <>
              <Link href='/auth/login'>
                <button className="mobile-menu__trade-button" onClick={() => { props.setMobileMenu(false) }}>Trade <PlusSVG width={'24px'} fill={"#FFF"}></PlusSVG></button>
              </Link>
              <Link href='/auth/login'>
                <button onClick={() => { props.setMobileMenu(false) }}>Login</button>
              </Link>
            </>
            :
            <>
              <Link href='/product/new/'>
                <button className="mobile-menu__trade-button" onClick={() => { props.setMobileMenu(false) }}>Trade <PlusSVG width={'24px'} fill={"#FFF"}></PlusSVG> </button>
              </Link>
              <button className="mobile-menu__logout-button" onClick={() => { props.setMobileMenu(false); signOut() }}>Logout <OffSVG width={'24px'} fill={"#ff7b7b"}></OffSVG></button>
            </>
          }
        </div>
      </div>

    </>
  )
}

export default MobileMenu