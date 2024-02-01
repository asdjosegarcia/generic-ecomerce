import React from 'react'
import './Main.css'
// import { useSession } from "next-auth/react";//sesión del usuario
import VerticalProductList from '@/components/organisms/VerticalProductList';
import MainBanner from '@/components/organisms/MainBanner';







const Main = () => {
  return (
    <div  className='main__container'>
      <MainBanner></MainBanner>
      <VerticalProductList title={'Stuff that might interest you!'}></VerticalProductList>
      <VerticalProductList title={'Smartphones'}></VerticalProductList>


      {/* <CartList></CartList> */}
      

      
    </div>
  )
}

export default Main