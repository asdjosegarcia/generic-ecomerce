// 'use client'
import React from 'react'
import './ProductCard.css'
import BadgetFreeShipping from './BadgetFreeShipping'
import HeartSVG from '../SVG/HeartSVG'
import HeartOutlineSVG from '../SVG/HeartOutlineSVG'
import BadgetStars from './BadgetStars'

const ProductCard = ({product}) => {
  // console.log('product-card', product )

    // console.log(product)
  return (
    <>
      <div className='product-card'>
        <img className='prodcut-card__img' src={product.images.image1} alt="" />
        <h3 className='prodcut-card__title'>{product.title}</h3>
        <h4 className='prodcut-card__price'>${product.price}</h4>
        <span className='prodcut-card__favorite'>{(product.favorites)?<HeartSVG width={24} height={24}/>:<HeartOutlineSVG width={24} height={24}/>}</span>
        <span className='prodcut-card__qualification'><BadgetStars qualification={product.qualification}/></span>
        <p className='prodcut-card__shipment'>{product.shipment==0? <BadgetFreeShipping/>: '$'+ product.shipment }</p>
      </div>
    </>
  )
}

export default ProductCard