import React from 'react'
import ProductSearchList from '@/components/organisms/ProductSearchList'
import TopMenu from '@/components/organisms/TopMenu'



const route = ({ params }) => {

  
  
  return (
    <>
      <TopMenu></TopMenu>
      <ProductSearchList urlParams={params} ></ProductSearchList>
    </>
  )
}

export default route