import React from 'react'
import './VerticalProductCard.css'

const VerticalProductCard = (props) => {
    return (
        <div className='vertical-card__container'>
            <img></img>
            <p>{props.title}Title</p>
            <span>
                <p>Price</p>
                <p>discount</p>
            </span>
            <p>Shippment</p>
        </div>
    )
}

export default VerticalProductCard