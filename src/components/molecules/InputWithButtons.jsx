import React from 'react'
import PlusSVG from '@/SVG/PlusSVG'
import MinusSVG from '@/SVG/MinusSVG'
import './InputWithButtons.css'


const InputWithButtons = (props) => {
    const minusOne=()=>{
        if (props.currentValue > 1) {
            props.newValue(props.currentValue-1)
        }
    }
    const plusOne=()=>{
        props.newValue(props.currentValue+1)


    }
  return (
    <div>
          <div className='InputWithButtons__container'>
      <button onClick={() => minusOne()} className='InputWithButtons__minus-button'>
        <MinusSVG height={'30px'}></MinusSVG>
      </button>
      <input type="number" min="1" onChange={() => { }} value={props.currentValue} />
      <button onClick={() => plusOne()} className='InputWithButtons__plus-button'>
        <PlusSVG height={'30px'}></PlusSVG>
      </button>
    </div>
    </div>
  )
}

export default InputWithButtons
