import React from 'react'
import './BadgetFreeShipping.css'
import CartSVG from '../SVG/CartSVG'

const BadgetFreeShipping = () => {
  return (
    <span className='free-shipping-badget'>
      {/* <CartSVG height={"16px"} width={'16px'}  fill={'#008000'}></CartSVG> */}
      <p>Free Shipping</p>
    </span>
  )
}

export default BadgetFreeShipping