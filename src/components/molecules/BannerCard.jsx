import React from 'react'
import './BannerCard.css'

const BannerCard = () => {
  return (
    <div className='banner-card__container'>
      <div className='banner-card__cards-container'>
        <img className='banner-card__img' id="slide-1"  src="/img/banners/summer-sale.jpg" alt="" />
        <img className='banner-card__img' id="slide-2" src="/img/banners/radeon-banner.webp" alt="" />
        <img className='banner-card__img' id="slide-3" src="/img/banners/winter-sales.jpg" alt="" />
        {/* <img className='banner-card__img' id="slide-4" src="/img/banners/food-banner.jpg" alt="" /> */}

        {/* <img className='banner-card__img' id="slide-1"  src="/img/banners/summer-sale.jpg" alt="" /> */}
      </div>
      <div className="slider-nav">
        <a href="#slide-1"></a>
        <a href="#slide-2"></a>
        {/* <a href="#slide-3">3</a> */}
      </div>
    </div>
  )
}

export default BannerCard