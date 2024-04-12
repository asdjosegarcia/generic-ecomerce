import React from 'react'
import './Main.css'
// import { useSession } from "next-auth/react";//sesión del usuario
import HorizontalProductList from '@/components/organisms/HorizontalProductList';
import MainBanner from '@/components/organisms/MainBanner';
import VerticalProductList from '../organisms/VerticalProductList';
// import ProductList from '../organisms/ProductSearchList';
import ProductList from '../organisms/ProductList';








const Main = () => {
  return (
    <div  className='main__container'>
      <MainBanner></MainBanner>
      <div className='main_products'>
      <HorizontalProductList  title={'Stuff that might interest you!'} link={'/api/products/category/1'}></HorizontalProductList>
      <HorizontalProductList  title={'Smartphones'} link={'/api/products/category/2'}></HorizontalProductList>
      <VerticalProductList title={'Offers'} link={'/api/offers'}></VerticalProductList>  
      <ProductList title={'Waiting for you'} link={'/api/products/category/3'}/>      
      {/* <VerticalProductList title={'Categories'} link={'/api/products/category/5'}></VerticalProductList>   */}
      <HorizontalProductList  title={'Your history'} link={'/api/products/category/4'}></HorizontalProductList>
      </div>

    </div>
  )
}

export default Main