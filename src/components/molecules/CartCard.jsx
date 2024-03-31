import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import './CartCard.css'
import CartInputNumber from './CartInputNumber'
import DeleteProductButton from '@/components/atoms/DeleteProductButton'
import BadgetFreeShipping from '../atoms/BadgetFreeShipping'
import { variableContext } from "@/context/contexto";
import InputWithButtons from './InputWithButtons'



let imgSrc;
const CartCard = ({ product, index}) => {
  // console.log(product);
  const [getproductQuantity, setproductQuantity] = useState(product.cartProductQuantities[0].quantity)
  const contexto = useContext(variableContext)
  // console.log(contexto.getCart);
  
  ///////actualizamos el Cart del contexto
  useEffect(() => {
    // contexto.setCart({...contexto.getCart,products[]})
    const cartCopy={...contexto.getCart}
    cartCopy.products[index].cartProductQuantities[0].quantity=getproductQuantity
    contexto.setCart(cartCopy)
  }, [getproductQuantity])
  
  

  const handleClickOnButtons = (event) => {
    event.stopPropagation();// evita que el clic en los botones active el enlace del contenedor padre
  };


  /////////////////////////cargamos la imagen ya sea url o base64
  if (product.previewImg) {
    imgSrc = product.previewImg
  } else {
    imgSrc = contexto.bytesToBase(product.previewImgBase.data.data, product.previewImgBase.mimetype)
  }

  return (
    <>
      <div className='cart-card' >
        <Link className='cart-card__link-img' href={`/product/${product.id}`} >
          <img className='cart-card__img' src={imgSrc} alt="" />
        </Link>
        <Link className='cart-card__link-title' href={`/product/${product.id}`} >
          <p className='cart-card__title'>{product.title}</p>
        </Link>

        <h4 className='cart-card__price'>${product.price}</h4>
        <div className='cart-card__favorite-delete-container'>
          {/* <span className='cart-card__favorite'>{(product.favorites) ? <HeartSVG width={24} height={24} fill={'#3483fa'} /> : <HeartOutlineSVG width={24} height={24} fill={'#3483fa'} />}</span> */}
          <DeleteProductButton style={{ pointerEvents: 'none' }} link={'/api/cart/'} productId={product.id} ></DeleteProductButton>
        </div>
        <p className='cart-card__shipment'>{product.shipment == 0 ? <BadgetFreeShipping /> : '$' + product.shipment}</p>
        {/* <CartInputNumber productPrice={product.price} productId={product.id} productShipment={product.shipment} ></CartInputNumber> */}
        <InputWithButtons currentValue={getproductQuantity} newValue={setproductQuantity}></InputWithButtons>
      </div>
    </>


  )
}

export default CartCard




