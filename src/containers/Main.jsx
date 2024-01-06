import React from 'react'
import ProductList from './ProductList'
import OrderBy from '../components/OrderBy'
import FilterBy from '../components/FilterBy'
import TopMenu from './TopMenu'
import { Rubik } from 'next/font/google'
const rubik = Rubik({
    weight: ['300','400','500', '700',],
    subsets: ['latin'],
  })


const Main = () => {
  return (
    <div className={rubik.className}>
      {/* <OrderBy></OrderBy> */}
      <TopMenu></TopMenu>
      <ProductList></ProductList>
      
    </div>
  )
}

export default Main