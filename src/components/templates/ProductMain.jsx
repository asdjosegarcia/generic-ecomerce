// 'use client'
import React, { useEffect, useState,useContext } from 'react'
import Loading from '@/components/templates/Loading'
import BadgetFreeShipping from '@/components/atoms/BadgetFreeShipping'
import BadgetStars from '@/components/molecules/BadgetStars'
import './ProductMain.css'
import ShippingSVG from '@/SVG/ShippingSVG'
import ProductQuestionList from '@/components/organisms/ProductQuestionList'
// import { useRouter } from 'next/navigation'
import FloatingNotification from '@/components/atoms/FloatingNotification'
import Link from 'next/link'
import { variableContext } from "@/context/contexto";





const ProductMain = ({ product }) => {
  const contexto = useContext(variableContext)
  // const router = useRouter()
  const [getNotificationText,setNotificationText]=useState(null)

  const addToCart=async (productId)=>{
  //   console.log('eeee')
    const email='user8@gmail.com'
  const res = await fetch(`/api/cart/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email:email,
      // pasword:'',
      productId:productId,  
    }),
  });
  // console.log(productId,email)
  // console.log(await res.json())
  if(res.ok){
    contexto.setNotificationText('Added to cart!')
  }else{
    contexto.setNotificationText('Error')
  }

  }

  // console.log(product)
  return (
    <div className='product__container'>
      {getNotificationText&& <FloatingNotification notificationText={getNotificationText}></FloatingNotification>}
        
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
        <Link href={'/product/buy/'+product?.id}>
        <button /* onClick={()=>{router.push('/product/buy/'+product?.id)}} */ className='btn btn__buy'>Buy now</button>
        </Link>
        <button onClick={()=>{addToCart(product.id)}} className='btn btn__cart'>Add to cart</button>
        <div>
          <p className='product__description--title'>Description</p>
          <p className='product__description--content'>{product?.ProductComplete?.description}</p>
        </div>
        <p className='porduct__seller'>Seller:{product?.seller}</p>
        {/* <p>{product?.description}</p> */}

    </div>
  )
}

export default ProductMain