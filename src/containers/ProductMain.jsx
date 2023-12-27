// 'use client'
import React, { useEffect, useState } from 'react'
import Loading from '@/components/Loading'
import BadgetFreeShipping from '@/components/BadgetFreeShipping'

const ProductMain = ({ product }) => {
  // console.log(product)
  return (
    <div>
      {!product && <Loading></Loading>}

      <h1>{product?.title}</h1>
      <img className='product__img' src={product?.ProductComplete.images.image1} alt="" />
      <h4 className='prodcut__price'>${product?.price}</h4>
      <p className='prodcut__shipment'>{product?.shipment == 0 ? <BadgetFreeShipping /> : '$' + product?.shipment}</p>
      <div>{`Stock(${product?.ProductComplete.stock})`}</div>
      <button>Add to cart</button>
      <button>Buy</button>
      <p>Description: {product?.ProductComplete.description}</p>
      <p>{product?.description}</p>


    </div>
  )
}

export default ProductMain