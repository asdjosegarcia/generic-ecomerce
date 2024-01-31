import React from 'react'
// import { useSession } from "next-auth/react";//sesión del usuario
import VerticalProductList from '@/components/organisms/VerticalProductList';
import MainBanner from '@/components/organisms/MainBanner';





const Main = () => {
  return (
    <div >
      <MainBanner></MainBanner>
      <VerticalProductList></VerticalProductList>

      {/* <CartList></CartList> */}
      

      
    </div>
  )
}

export default Main