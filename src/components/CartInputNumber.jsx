import React from 'react'
import './CartInputNumber.css'
import PlusSVG from '@/SVG/PlusSVG'
import MinusSVG from '@/SVG/MinusSVG'

const CartInputNumber = () => {
  return (
    <div className='cart-input__container'>
        <button className='cart-input__minus-button'>
        <MinusSVG height={'30px'}></MinusSVG>
        </button>
        <input type="number" value={1} />
        <button className='cart-input__plus-button'>
        <PlusSVG height={'30px'}></PlusSVG>
        </button>
    </div>
  )
}

export default CartInputNumber