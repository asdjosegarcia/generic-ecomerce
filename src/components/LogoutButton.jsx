"use client"
import React from 'react'
import {signOut} from 'next-auth/react'//importamos la funcion que nos desloquea desde next-auth

const LogoutButton = () => {
  return (
    <>
    <button onClick={()=>signOut()}>Logout</button> {/* usamos la funcion que importamos para que nos desloguee */}
    </>
  )
}

export default LogoutButton