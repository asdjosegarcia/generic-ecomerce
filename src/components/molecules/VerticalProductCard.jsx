import React from 'react'
import './VerticalProductCard.css'
import BadgetFreeShipping from '../atoms/BadgetFreeShipping'
import BadgetPercentageDiscount from '../atoms/BadgetPercentageDiscount'
import Link from 'next/link'

let imgSrc;
const VerticalProductCard = (props) => {
    console.log(props.product);
    let newPrice
    if (props.product.discount > 0) {
        const priceDiscount = props.product.price * props.product.discount / 100
        newPrice = (props.product.price - priceDiscount).toFixed(2)
    }
    if (props.product.previewImgBase?.data ){
        // console.log(product.previewImgBase.data.data)
        // console.log(product.previewImgBase.mimetype)
        const byteArray = new Uint8Array(props.product.previewImgBase.data.data);//creamos un Unit8Array que no almacena los array en grupos aunque asi lo mustre firefox, sino en un valor de 8bits/1 byte(datos binarios de 8 bits 0 a 255) ej 125,0,5,3,etc (datos codificados en bits)
        // console.log(byteArray)
        let binaryString = '';//almacenara un string, a cada string se le suma 1 caracter por cada 8bites/1byte gracias a String.fromCharCode que transforma cada byte en 1 caracter, los � son datos que el navegador no puede representar
        for (let i = 0; i < byteArray.length; i++) {//1 recorrido por cada byte
          binaryString += String.fromCharCode(byteArray[i]);//byteArray[i] nos dara cada byte, String.fromCharCode() transformara el byte de DECIMAL a caracter UTF-16,+= sumara el caracter a binaryString 
        }
        const base64String =  btoa(binaryString);//btoa() funcion que transforma caractes de UTF-16 c/u a Base64 
        imgSrc='data:'+props.product.previewImgBase.mimetype+';base64,'+base64String //agregamos lo necesario para que se pueda representar en <img>
      }else{
        imgSrc=props.product.previewImg
      }

    // console.log(props.product)
    return (
        <Link href={`/product/${props.product.id}`}>
            <div className='vertical-card__container'>
                <div className='vertical-card__img-container'>
                    <img className='vertical-card__img' src={imgSrc}></img>

                </div>
                <p className='vertical-card__title'>{props.product.title}</p>
                <p className='vertical-card__old-price'>${props.product.price}</p>
                <span className='vertical-card__price-container'>
                    <p className='vertical-card__price'>${(newPrice) ? newPrice : props.product.price}&nbsp;</p>
                    <BadgetPercentageDiscount discount={props.product.discount}></BadgetPercentageDiscount>
                </span>
                {(props.product.shipment == 0) &&
                    <BadgetFreeShipping></BadgetFreeShipping>
                }
                {/* <p>{props.product.shipment}$</p> */}
            </div>
        </Link>
    )
}

export default VerticalProductCard