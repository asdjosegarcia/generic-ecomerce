import React from 'react'
import './Main.css'
// import { useSession } from "next-auth/react";//sesión del usuario
import HorizontalProductList from '@/components/organisms/HorizontalProductList';
import MainBanner from '@/components/organisms/MainBanner';







const Main = () => {
  return (
    <div  className='main__container'>
      <MainBanner></MainBanner>
      <HorizontalProductList  title={'Stuff that might interest you!'} link={'/api/products/category/1'}></HorizontalProductList>
      <HorizontalProductList  title={'Smartphones'} link={'/api/products/category/5'}></HorizontalProductList>


      {/* <CartList></CartList> */}
      

      
    </div>
  )
}

export default Main