import React from 'react'
import Link from 'next/link'
import './CartCard.css'
import CartInputNumber from './CartInputNumber'
import HeartSVG from '@/SVG/HeartSVG'
import HeartOutlineSVG from '@/SVG/HeartOutlineSVG'
import DeleteSVG from '@/SVG/DeleteSVG'


const CartCard = ({product}) => {
  // console.log('card '+product);
  // console.log('hola')
  return (
    <>
    <Link className='link' href="/product/'+product.id">
      <div className='cart-card' >
        <img className='cart-card__img' src={product.previewImg} alt=""/>
        <p className='cart-card__title'>{product.title}</p>
        <h4 className='cart-card__price'>${product.price}</h4>
        <div className='cart-card__favorite-delete-container'>
        <span className='cart-card__favorite'>{(product.favorites)?<HeartSVG width={24} height={24} fill={'#3483fa'}/>:<HeartOutlineSVG width={24} height={24}fill={'#3483fa'}/>}</span>
        <span className='cart-card__delete'><DeleteSVG height={'24px'} fill={'#696969'}></DeleteSVG></span>
        </div>
        {/* <span className='cart-card__qualification'><BadgetStars qualification={product.qualification}/></span> */}
        <p className='cart-card__shipment'>{product.shipment==0? <BadgetFreeShipping/>: '$'+ product.shipment }</p>
        {/* <p className='cart-card__condition' >{product.condition}</p> */}
      <CartInputNumber></CartInputNumber>
      </div>
    </Link>
    </>


  )
}

export default CartCard