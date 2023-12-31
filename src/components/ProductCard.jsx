'use client'

import React from 'react'
import './ProductCard.css'
import BadgetFreeShipping from './BadgetFreeShipping'
import HeartSVG from '../SVG/HeartSVG'
import HeartOutlineSVG from '../SVG/HeartOutlineSVG'
import BadgetStars from './BadgetStars'
import { useRouter } from 'next/navigation'

const ProductCard = ({product}) => {
  // console.log('product-card', product )
  const router = useRouter()
  // console.log(product.id)


    // console.log(product)
  return (
    <>
      <div className='product-card' onClick={()=>{router.push('/product/'+product.id)}}>
        <img className='prodcut-card__img' src={product.previewImg} alt=""/>
        <p className='prodcut-card__title'>{product.title}</p>
        <h4 className='prodcut-card__price'>${product.price}</h4>
        <span className='prodcut-card__favorite'>{(product.favorites)?<HeartSVG width={24} height={24} fill={'#3483fa'}/>:<HeartOutlineSVG width={24} height={24}fill={'#3483fa'}/>}</span>
        <span className='prodcut-card__qualification'><BadgetStars qualification={product.qualification}/></span>
        <p className='prodcut-card__shipment'>{product.shipment==0? <BadgetFreeShipping/>: '$'+ product.shipment }</p>
        <p className='prodcut-card__condition' >{product.condition}</p>
      </div>
    </>
  )
}

export default ProductCard