'use client'
import React,{useState} from 'react'
import ProductSearchList from '@/components/organisms/ProductSearchList'
import TopMenu from '@/components/organisms/TopMenu'
import './SearchPage.css'
import Loading from '@/components/templates/Loading'



const route = ({ params }) => {
  const [getLoading, setLoading] = useState(true);//si se esta cargando la lista de productos


  return (
    <>
    <div className='SearchPage'>

      <TopMenu></TopMenu>
      <ProductSearchList urlParams={params} getLoading={getLoading} setLoading={setLoading} ></ProductSearchList>
    </div>
      {getLoading && <Loading></Loading>}
    </>
  )
}

export default route