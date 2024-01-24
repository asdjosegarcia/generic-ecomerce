'use client'
import React,{useContext} from 'react'
import './MobileMenu.css'
import UserSVG from '@/SVG/UserSVG'
import Link from 'next/link'
import { useSession } from "next-auth/react";
import { signOut } from 'next-auth/react'//importamos la funcion que nos desloquea desde next-auth
import { variableContext } from "@/context/contexto";






const MobileMenu = (props) => {
  const { data: session } = useSession();
  const contexto = useContext(variableContext)

  // const inputRef = useRef(null)
  // const enfocarInput = () => {
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // };
  const searchFunc=()=>{
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
            <button onClick={() => { props.setMobileMenu(false) }} >Home</button>
          </Link>
          {/* <input ref={inputRef}></input> */}
          <button onClick={searchFunc} >Search</button>
          <button>Notifications</button>
          <button>My Shopping</button>
          {(session?.user?.name) ?
          <Link className='mobile-menu__Favorites-link' href='/favorites'>
          <button onClick={() => { props.setMobileMenu(false) }}>Favorites</button>
          </Link>
          :
            <></>
          }
          <button>Offers</button>
          {(!session?.user?.name) ?
            <Link href='/auth/login'>
              <button onClick={() => { props.setMobileMenu(false) }}>Login</button>
            </Link>
            :
            <button className="mobile-menu__logout-button" onClick={() => { props.setMobileMenu(false); signOut() }}>Logout</button>
          }
        </div>
      </div>

    </>
  )
}

export default MobileMenu