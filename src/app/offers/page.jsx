import React from 'react'
import BannerCard from '@/components/molecules/BannerCard'
import VerticalProductList from '@/components/organisms/VerticalProductList'
import './OffersPage.css'
import CategoryVerticalCard from '@/components/molecules/CategoryVerticalCard'

const page = () => {
  return (
    <div className='OffersPage'>
      <img className='OffersPage__banner-img' src='/img/banners/discount-1.jpg'></img>
      {/* <VerticalProductList link={'/api/'}></VerticalProductList> */}
      <CategoryVerticalCard></CategoryVerticalCard>
    </div>
  )
}

export default page
