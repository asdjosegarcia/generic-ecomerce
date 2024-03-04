'use client'

import React, { useContext, useState } from 'react'
import './ProductCard.css'
import BadgetFreeShipping from '@/components/atoms/BadgetFreeShipping'
// import HeartSVG from '../../SVG/HeartSVG'
// import HeartOutlineSVG from '../../SVG/HeartOutlineSVG'
import BadgetStars from './BadgetStars'
import { useRouter } from 'next/navigation'
import { variableContext } from "@/context/contexto";
import { useSession } from 'next-auth/react';
import EnabledFavoriteButton from '../atoms/EnabledFavoriteButton'
import DisabledFavoriteButton from '../atoms/DisabledFavoriteButton'

let imgSrc;
const ProductCard = ({ product, favorite, disableFavorite }) => {
  const [getFavorite, setFavorite] = useState(product?.favorite || favorite)
  const { data: session } = useSession();//cargamos datos del usuario en session   
  const contexto = useContext(variableContext)
  const router = useRouter()
  if (product.previewImgBase?.data ){
    // console.log(product.previewImgBase.data.data)
    // console.log(product.previewImgBase.mimetype)
    const byteArray = new Uint8Array(product.previewImgBase.data.data);//creamos un Unit8Array que no almacena los array en grupos aunque asi lo mustre firefox, sino en un valor de 8bits/1 byte(datos binarios de 8 bits 0 a 255) ej 125,0,5,3,etc (datos codificados en bits)
    // console.log(byteArray)
    let binaryString = '';//almacenara un string, a cada string se le suma 1 caracter por cada 8bites/1byte gracias a String.fromCharCode que transforma cada byte en 1 caracter, los � son datos que el navegador no puede representar
    for (let i = 0; i < byteArray.length; i++) {//1 recorrido por cada byte
      binaryString += String.fromCharCode(byteArray[i]);//byteArray[i] nos dara cada byte, String.fromCharCode() transformara el byte de DECIMAL a caracter UTF-16,+= sumara el caracter a binaryString 
    }
    const base64String =  btoa(binaryString);//btoa() funcion que transforma caractes de UTF-16 c/u a Base64 
    imgSrc='data:'+product.previewImgBase.mimetype+';base64,'+base64String //agregamos lo necesario para que se pueda representar en <img>
  }else{
    imgSrc=product.previewImg
  }
  //https://www.branah.com/unicode-converter pagina para chequear

  return (
    <>
      <div className='product-card ProductCard' onClick={() => { router.push('/product/' + product.id) }}>
        <div className='prodcut-card__img-container'>
          <img className='prodcut-card__img' src={imgSrc} alt="" />
        </div>
        {/* <p>{product.id}</p> */}
        <p className='prodcut-card__title'>{product.title}</p>
        <h4 className='prodcut-card__price'>${product.price}</h4>
        {!disableFavorite &&
          <span className='prodcut-card__favorite' >{(getFavorite) ?
            <EnabledFavoriteButton favorite={setFavorite} email={session?.user.email} productId={product.id} notification={contexto.setNotificationText} />
            :
            <DisabledFavoriteButton favorite={setFavorite} email={session?.user.email} productId={product.id} notification={contexto.setNotificationText} />}
          </span>
        }
        <span className='prodcut-card__qualification'><BadgetStars qualification={product.qualification} /></span>
        <p className='prodcut-card__shipment'>{product.shipment == 0 ? <BadgetFreeShipping /> : '$' + product.shipment}</p>
        <p className='prodcut-card__condition' >{product.condition}</p>
      </div>
    </>
  )
}

export default ProductCard