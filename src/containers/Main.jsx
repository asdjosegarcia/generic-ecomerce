import React from 'react'
// import CartList from './CartList'
import { useSession } from "next-auth/react";//sesión del usuario
import { Rubik } from 'next/font/google'//funte

const rubik = Rubik({//fuente
    weight: ['300','400','500', '700',],
    subsets: ['latin'],
  })


const Main = () => {
  return (
    <div className={rubik.className}>

      {/* <CartList></CartList> */}
      Main

      
    </div>
  )
}

export default Main