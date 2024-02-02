import React from 'react'
import './VerticalProductCard.css'
import BadgetFreeShipping from '../atoms/BadgetFreeShipping'

const VerticalProductCard = (props) => {
    // console.log('e')
    console.log(props.product)
    return (
        <div className='vertical-card__container'>
            <img className='vertical-card__img' src={props.product.previewImg}></img>
            <p>{props.product.title}</p>
            <p className='vertical-card__old-price'>$300</p>
            <span className='vertical-card__price-container'>
                <p className='vertical-card__price'>${props.product.price}&nbsp;</p>
                <p className='vertical-card__price-discount'>23% OFF</p>
            </span>
            {(props.product.shipment==0)&&
            <BadgetFreeShipping></BadgetFreeShipping>
            }
            {/* <p>{props.product.shipment}$</p> */}
        </div>
    )
}

export default VerticalProductCard