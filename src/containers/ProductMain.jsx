'use client'
import React from 'react'
import Loading from '@/components/Loading'
import BadgetFreeShipping from '@/components/BadgetFreeShipping'

const ProductMain = ({ product }) => {


  return (
    <div>
      {!product && <Loading></Loading>}
      <h1>{product?.title}</h1>
      <img className='product__img' src={product?.previewImg} alt="" />
      <h4 className='prodcut__price'>${product?.price}</h4>
      <p className='prodcut__shipment'>{product?.shipment==0? <BadgetFreeShipping/>: '$'+ product?.shipment }</p>
      <div>Stock()</div>
      <p>{product?.description}</p>
      <div>

      </div>


    </div>
  )
}

export default ProductMain