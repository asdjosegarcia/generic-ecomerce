'use client'

import React from 'react'
import './ProductCard.css'
import BadgetFreeShipping from '@/components/atoms/BadgetFreeShipping'
import HeartSVG from '../../SVG/HeartSVG'
import HeartOutlineSVG from '../../SVG/HeartOutlineSVG'
import BadgetStars from './BadgetStars'
import { useRouter } from 'next/navigation'

const ProductCard = ({product}) => {
  const router = useRouter()
  const favorites=async(event)=>{
    event.stopPropagation();//evita que un elemto se propage, es util para que no nos redirija al hacer click en el icono de favorite
    console.log('Clik favorito');
    
      // const res = await fetch(`${link}`, {
      //   method: 'DELETE',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     email:session?.user.email,
      //     productId:productId,  
      //   }),
      // });
      // if(res.ok){
      //   contexto.setNotificationText('Deleted')
      // }else{
      //   contexto.setNotificationText('Error')
      // }
  

  }

  return (
    <>
      <div className='product-card' onClick={()=>{router.push('/product/'+product.id)}}>
        <img className='prodcut-card__img' src={product.previewImg} alt=""/>
        <p className='prodcut-card__title'>{product.title}</p>
        <h4 className='prodcut-card__price'>${product.price}</h4>
        <div className='prodcut-card__favorite' onClick={favorites}>{(product.favorites)?<HeartSVG width={24} height={24} fill={'#3483fa'}/>:<HeartOutlineSVG width={24} height={24}fill={'#3483fa'}/>}</div>
        <span className='prodcut-card__qualification'><BadgetStars qualification={product.qualification}/></span>
        <p className='prodcut-card__shipment'>{product.shipment==0? <BadgetFreeShipping/>: '$'+ product.shipment }</p>
        <p className='prodcut-card__condition' >{product.condition}</p>
      </div>
    </>
  )
}

export default ProductCard