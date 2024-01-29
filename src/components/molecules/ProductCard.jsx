'use client'

import React,{useContext} from 'react'
import './ProductCard.css'
import BadgetFreeShipping from '@/components/atoms/BadgetFreeShipping'
import HeartSVG from '../../SVG/HeartSVG'
import HeartOutlineSVG from '../../SVG/HeartOutlineSVG'
import BadgetStars from './BadgetStars'
import { useRouter } from 'next/navigation'
import { variableContext } from "@/context/contexto";
import { useSession } from 'next-auth/react';
import EnabledFavoriteButton from '../atoms/EnabledFavoriteButton'
import DisabledFavoriteButton from '../atoms/DisabledFavoriteButton'


const ProductCard = ({product}) => {
  const { data: session } = useSession();//cargamos datos del usuario en session   
  const contexto = useContext(variableContext)
  const router = useRouter()
  const favoritesClick=async(event)=>{
    event.stopPropagation();//evita que un elemto se propage, es util para que no nos redirija al hacer click en el icono de favorite
    // deleteFavorite()
    postFavorite()
  
    // console.log(session.user.email)
  }
  


  // const deleteFavorite=async()=>{
  //   const res = await fetch(`/api/favorites/`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email:session.user.email,
  //       productId:product.id
  //     }),
  //   });
  //   if(res.ok){
  //     contexto.setNotificationText('Deleted')
  //   }else{
  //     contexto.setNotificationText('Error')
  //   }
  // }
  

  

  return (
    <>
      <div className='product-card' onClick={()=>{router.push('/product/'+product.id)}}>
        <img className='prodcut-card__img' src={product.previewImg} alt=""/>
        <p className='prodcut-card__title'>{product.title}</p>
        <h4 className='prodcut-card__price'>${product.price}</h4>
        <span className='prodcut-card__favorite' >{(product.favorites)?
        <EnabledFavoriteButton email={session?.user.email} product={product.id} notification={contexto.setNotificationText} />
        :
        <DisabledFavoriteButton email={session?.user.email} productId={product.id} notification={contexto.setNotificationText}/>}
        </span>
        <span className='prodcut-card__qualification'><BadgetStars qualification={product.qualification}/></span>
        <p className='prodcut-card__shipment'>{product.shipment==0? <BadgetFreeShipping/>: '$'+ product.shipment }</p>
        <p className='prodcut-card__condition' >{product.condition}</p>
      </div>
    </>
  )
}

export default ProductCard