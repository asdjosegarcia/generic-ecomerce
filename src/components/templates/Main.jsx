import React from 'react'
import './Main.css'
// import { useSession } from "next-auth/react";//sesión del usuario
import HorizontalProductList from '@/components/organisms/HorizontalProductList';
import MainBanner from '@/components/organisms/MainBanner';
import VerticalProductList from '../organisms/VerticalProductList';
// import ProductList from '../organisms/ProductSearchList';







const Main = () => {
  return (
    <div  className='main__container'>
      <MainBanner></MainBanner>
      <HorizontalProductList  title={'Stuff that might interest you!'} link={'/api/products/category/1'}></HorizontalProductList>
      <HorizontalProductList  title={'Smartphones'} link={'/api/products/category/5'}></HorizontalProductList>
      <VerticalProductList title={'Offers'} link={'/api/products/category/5'}></VerticalProductList>  
      {/* <ProductList/>       */}
    </div>
  )
}

export default Main