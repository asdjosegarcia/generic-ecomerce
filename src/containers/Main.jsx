import React from 'react'
import ProductList from './ProductList'
// import CartList from './CartList'
import TopMenu from './TopMenu'
import { Rubik } from 'next/font/google'//funte

const rubik = Rubik({//fuente
    weight: ['300','400','500', '700',],
    subsets: ['latin'],
  })




const Main = () => {
  return (
    <div className={rubik.className}>
      <TopMenu></TopMenu>
      <ProductList></ProductList>
      {/* <CartList></CartList> */}

      
    </div>
  )
}

export default Main