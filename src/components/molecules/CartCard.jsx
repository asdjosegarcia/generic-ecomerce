import React, { useContext } from 'react'
import Link from 'next/link'
import './CartCard.css'
import CartInputNumber from './CartInputNumber'
import HeartSVG from '@/SVG/HeartSVG'
import HeartOutlineSVG from '@/SVG/HeartOutlineSVG'
import DeleteProductButton from '@/components/atoms/DeleteProductButton'
import BadgetFreeShipping from '../atoms/BadgetFreeShipping'


const CartCard = ({ product }) => {
  const handleClickOnButtons = (event) => {
    event.stopPropagation();// evita que el clic en los botones active el enlace del contenedor padre
  };

  // contexto.product
  // console.log(product.id)



  return (
    <>
      <div className='cart-card' >
        <Link className='cart-card__link-img' href={`/product/${product.id}`} >
          <img className='cart-card__img' src={product.previewImg} alt="" />
        </Link>
        <Link className='cart-card__link-title' href={`/product/${product.id}`} >
          <p className='cart-card__title'>{product.title}</p>
        </Link>

        <h4 className='cart-card__price'>${product.price}</h4>
        <div className='cart-card__favorite-delete-container'>
          <span className='cart-card__favorite'>{(product.favorites) ? <HeartSVG width={24} height={24} fill={'#3483fa'} /> : <HeartOutlineSVG width={24} height={24} fill={'#3483fa'} />}</span>
          <DeleteProductButton style={{ pointerEvents: 'none' }} link={'/api/cart/'} productId={product.id} ></DeleteProductButton>
        </div>
        <p className='cart-card__shipment'>{product.shipment == 0 ? <BadgetFreeShipping /> : '$' + product.shipment}</p>
        <CartInputNumber productPrice={product.price} productId={product.id} productShipment={product.shipment} ></CartInputNumber>
      </div>
    </>


  )
}

export default CartCard




