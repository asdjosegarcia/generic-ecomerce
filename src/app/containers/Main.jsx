import React from 'react'
import ProductList from './ProductList'
import OrderBy from '../components/OrderBy'
import FilterBy from '../components/FilterBy'
import TopMenu from './TopMenu'


const Main = () => {
  return (
    <div>
      {/* <OrderBy></OrderBy> */}
      <TopMenu></TopMenu>
      <ProductList></ProductList>
      
    </div>
  )
}

export default Main