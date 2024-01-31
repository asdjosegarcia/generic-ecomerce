import React from 'react'
import './VerticalProductList.css'
import VerticalProductCard from '@/components/molecules/VerticalProductCard';


const VerticalProductList = (props) => {
  return (
    <div className='vertical-product__container'>
        <span className='vertical-product__title-container'>

        <p className='vertical-product__title'>{props?.title}Title</p>
        </span>
        <VerticalProductCard></VerticalProductCard>
    </div>

  )
}

export default VerticalProductList