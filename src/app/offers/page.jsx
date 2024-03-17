import React from 'react'
import BannerCard from '@/components/molecules/BannerCard'
import './OffersPage.css'
import VerticalCategoriesList from '@/components/organisms/VerticalCategoriesList'

const page = () => {
  return (
    <div className='OffersPage OffersPage__container'>
      <img className='OffersPage__banner-img' src='/img/banners/discount-1.jpg'></img>
      <VerticalCategoriesList link={'/api/categories/'}></VerticalCategoriesList>
    </div>
  )
}

export default page
