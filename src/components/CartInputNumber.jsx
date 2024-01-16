// 'use client'
import React,{useState} from 'react'
import './CartInputNumber.css'
import PlusSVG from '@/SVG/PlusSVG'
import MinusSVG from '@/SVG/MinusSVG'

const CartInputNumber = () => {
  const [getInputValue,setInputValue]=useState(1)

  const minusOne=()=>{
    if(getInputValue>1){
        setInputValue(getInputValue-1)
    }
  }
  
  const plusOne=()=>{
    // if(getInputValue>1){
        setInputValue(getInputValue+1)
    // }
  }

  return (
    <div className='cart-input__container'>
        <button onClick={()=>minusOne()} className='cart-input__minus-button'>
        <MinusSVG height={'30px'}></MinusSVG>
        </button>
        <input type="number" min="0" onChange={()=>{}} value={getInputValue} />
        <button onClick={()=>plusOne()} className='cart-input__plus-button'>
        <PlusSVG height={'30px'}></PlusSVG>
        </button>
    </div>
  )
}

export default CartInputNumber