import React from 'react'
import './BadgetPercentageDiscount.css'

const BadgetPercentageDiscount = (props) => {

  return (
        <p className='vertical-card__price-discount'>{(props.discount>0)?`${props.discount}% OFF`: ''}</p>
  )
}

export default BadgetPercentageDiscount