import React from 'react'
import ProductList from '@/components/organisms/ProductList'
import TopMenu from '@/components/organisms/TopMenu'



const route = ({ params }) => {

  
  
  return (
    <>
      <TopMenu></TopMenu>
      <ProductList urlParams={params}></ProductList>
    </>
  )
}

export default route