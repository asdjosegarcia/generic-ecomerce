import React from 'react'
import './BannerCard.css'

const BannerCard = () => {
  return (
    <div className='banner-card__container'>
      <div className='banner-card__cards-container'>
        <img className='banner-card__img' src="/img/banners/summer-sale.jpg" alt="" />
        <img className='banner-card__img' src="/img/banners/radeon-banner.webp" alt="" />
      </div>
    </div>
  )
}

export default BannerCard