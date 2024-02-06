// 'use client'
import React, { useState, useContext, useEffect } from 'react'
import './CartInputNumber.css'
import PlusSVG from '@/SVG/PlusSVG'
import MinusSVG from '@/SVG/MinusSVG'
import { variableContext } from "@/context/contexto";

// let objProductprices = {}
const CartInputNumber = ({ productPrice, productId, productShipment }) => {
  // console.log(productShipment)
  const contexto = useContext(variableContext)
  const [getInputValue, setInputValue] = useState(1)

  const minusOne = () => {//restamos uno a el input
    if (getInputValue > 1) {
      setInputValue(getInputValue - 1)
      updateProductsPrices(getInputValue - 1)
    }
  }

  const plusOne = () => {
    // if(getInputValue>1){
    setInputValue(getInputValue + 1)
    updateProductsPrices(getInputValue + 1)
    // }
  }

  const updateProductsPrices = (numberOfItems) => {//actualizamos el objeto con precios y envio
    contexto.setProductsPrices({ ...contexto.getProductsPrices, [productId]: productPrice * numberOfItems })
    contexto.setProductsShipment({ ...contexto.getProductsShippment, [productId]: productShipment })

    // console.log(contexto.getProductsPrices)
    // console.log(contexto.getProductsShippment)
  }

  if (contexto.getProductsPrices[productId] == null) { //si el producto no tiene precio aun lo creamos
    updateProductsPrices(getInputValue)
  }

  return (
    <div className='cart-input__container'>
      <button onClick={() => minusOne()} className='cart-input__minus-button'>
        <MinusSVG height={'30px'}></MinusSVG>
      </button>
      <input type="number" min="0" onChange={() => { }} value={getInputValue} />
      <button onClick={() => plusOne()} className='cart-input__plus-button'>
        <PlusSVG height={'30px'}></PlusSVG>
      </button>
    </div>
  )
}

export default CartInputNumber