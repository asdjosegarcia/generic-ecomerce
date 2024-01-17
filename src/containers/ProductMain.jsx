// 'use client'
import React, { useEffect, useState } from 'react'
import Loading from '@/components/Loading'
import BadgetFreeShipping from '@/components/BadgetFreeShipping'
import BadgetStars from '@/components/BadgetStars'
import './ProductMain.css'
import ShippingSVG from '@/SVG/ShippingSVG'
import ProductQuestionList from './ProductQuestionList'
import { useRouter } from 'next/navigation'
import FloatingNotification from '@/components/FloatingNotification'



const ProductMain = ({ product }) => {
  const router = useRouter()
  const [getNotificationText,setNotificationText]=useState(null)

  const addToCart=async (productId)=>{
    const userId=2
    const res = await fetch(`/api/cart/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        productId,
        
      }),
    });
    if(!res.ok){
      setNotificationText("We could not add the product")

    }else{
      setNotificationText('Product added sussesfully')
      setTimeout(() => {//eliminamos la notificacion en 2.5seg
        setNotificationText(null)
    }, 2500);
  }
  //  const result= await res.json();
  //   console.log(result)
  }

  // console.log(product)
  return (
    <div className='product__container'>
      {getNotificationText&& <FloatingNotification notificationText={getNotificationText}></FloatingNotification>}
        
      {!product ? <Loading></Loading> : <>
        <header>
          <p>{product?.condition}</p>
          <div className='porduct--qualification__container'>
            <p className='porduct--qualification__qualification-number'>{product?.qualification}</p>
            <BadgetStars qualification={product?.qualification} />
            <p>(560)</p>
          </div>
        </header>

        <p className='product__title'>{product?.title}</p>
        <div className='product--img__contiainter'>
          <img className='product__img' src={product?.ProductComplete?.images.image1} alt="" />
        </div>
        <p className='prodcut__price'>${product?.price}</p>
        <div className='product__shipment--container'>
          <ShippingSVG width={'24px'} fill={"#696969"}></ShippingSVG>
          <p className='prodcut__shipment'>{product?.shipment == 0 ? <BadgetFreeShipping /> : '‎ $' + product?.shipment}</p>
        </div>
        <p className='product__stock'>{`Stock(${product?.ProductComplete?.stock})`}</p>
        <button onClick={()=>{router.push('/product/buy/'+product?.id)}} className='btn btn__buy'>Buy now</button>
        <button onClick={()=>{addToCart(product.id)}} className='btn btn__cart'>Add to cart</button>
        <div>
          <p className='product__description--title'>Description</p>
          <p className='product__description--content'>{product?.ProductComplete?.description}</p>
        </div>
        <p className='porduct__seller'>Seller:{product?.seller}</p>
        {/* <p>{product?.description}</p> */}
      </>
      }

    </div>
  )
}

export default ProductMain