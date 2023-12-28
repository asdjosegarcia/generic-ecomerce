// 'use client'
import React, { useEffect, useState } from 'react'
import Loading from '@/components/Loading'
import BadgetFreeShipping from '@/components/BadgetFreeShipping'
import BadgetStars from '@/components/BadgetStars'
import './ProductMain.css'
import ShippingSVG from '@/SVG/ShippingSVG'


const ProductMain = ({ product }) => {
  console.log(product)
  return (
    <div className='product__container'>
      {!product? <Loading></Loading>:<>
      <header>
      <p>{product?.condition}</p>
      <BadgetStars qualification={product?.qualification}/>
      </header>

      <p className='product__title'>{product?.title}</p>
      <div className='product--img__contiainter'>
      <img className='product__img' src={product?.ProductComplete.images.image1} alt="" />
      </div>
      <h4 className='prodcut__price'>${product?.price}</h4>
      <ShippingSVG></ShippingSVG>
      <p className='prodcut__shipment'>{product?.shipment == 0 ? <BadgetFreeShipping /> : +'$' + product?.shipment}</p>
      <div>{`Stock(${product?.ProductComplete.stock})`}</div>
      <button className='btn btn__buy'>Buy now</button>
      <button className='btn btn__cart'>Add to cart</button>
      <p>Description: {product?.ProductComplete.description}</p>
      <p>Seller:{product?.seller}</p>
      <p>{product?.description}</p>
      </>
  }

    </div>
  )
}

export default ProductMain