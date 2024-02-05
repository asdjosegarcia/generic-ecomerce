import React from 'react'
import './VerticalProductCard.css'
import BadgetFreeShipping from '../atoms/BadgetFreeShipping'
import BadgetPercentageDiscount from '../atoms/BadgetPercentageDiscount'

const VerticalProductCard = (props) => {
    let newPrice
    if(props.product.discount>0){
        const priceDiscount=props.product.price*props.product.discount/100
        newPrice=(props.product.price-priceDiscount).toFixed(2)
    }

    // console.log(props.product)
    return (
        <div className='vertical-card__container'>
            <div className='vertical-card__img-container'>
            <img className='vertical-card__img' src={props.product.previewImg}></img>

            </div>
            <p className='vertical-card__title'>{props.product.title}</p>
            <p className='vertical-card__old-price'>${props.product.price}</p>
            <span className='vertical-card__price-container'>
                <p className='vertical-card__price'>${(newPrice)?newPrice:props.product.price}&nbsp;</p>
                <BadgetPercentageDiscount discount={props.product.discount}></BadgetPercentageDiscount>
            </span>
            {(props.product.shipment==0)&&
            <BadgetFreeShipping></BadgetFreeShipping>
            }
            {/* <p>{props.product.shipment}$</p> */}
        </div>
    )
}

export default VerticalProductCard