'use client'
import React,{useState} from 'react'
import BannerCard from '@/components/molecules/BannerCard'
import './OffersPage.css'
import VerticalCategoriesList from '@/components/organisms/VerticalCategoriesList'
import Loading from '@/components/templates/Loading'

const page = () => {
  const [getLoading,setLoading]=useState(true)
  return (

        <div className='OffersPage OffersPage__container'>
          {getLoading && <Loading backgroundColor={"rgba(160, 160, 160, 0.164)"}/>}
          <img className='OffersPage__banner-img' src='/img/banners/discount-1.jpg'></img>
          <VerticalCategoriesList link={'/api/categories/'} setLoading={setLoading}></VerticalCategoriesList>
        </div>
      
  )
}

export default page
