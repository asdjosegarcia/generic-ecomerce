import React from 'react'
import ProductSearchList from '@/components/organisms/ProductSearchList'
import TopMenu from '@/components/organisms/TopMenu'
import './SearchPage.css'



const route = ({ params }) => {


  return (
    <div className='SearchPage'>

      <TopMenu></TopMenu>
      <ProductSearchList urlParams={params} ></ProductSearchList>
    </div>
  )
}

export default route