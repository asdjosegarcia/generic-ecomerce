// 'use client'
import React, { useEffect, useState,useContext } from 'react'
import Loading from '@/components/templates/Loading'
import BadgetFreeShipping from '@/components/atoms/BadgetFreeShipping'
import BadgetStars from '@/components/molecules/BadgetStars'
import './ProductMain.css'
import ShippingSVG from '@/SVG/ShippingSVG'
import ProductQuestionList from '@/components/organisms/ProductQuestionList'
// import { useRouter } from 'next/navigation'
import FloatingNotification from '@/components/atoms/FloatingNotification'
import Link from 'next/link'
import { variableContext } from "@/context/contexto";




let imgSrc;

const ProductMain = ({ product }) => {
  const contexto = useContext(variableContext)
  // const router = useRouter()
  const [getNotificationText,setNotificationText]=useState(null)

  if (product?.ProductComplete?.productImages[0]?.data){
    const byteArray = new Uint8Array(product?.ProductComplete?.productImages[0].data.data);//creamos un Unit8Array que no almacena los array en grupos aunque asi lo mustre firefox, sino en un valor de 8bits/1 byte(datos binarios de 8 bits 0 a 255) ej 125,0,5,3,etc (datos codificados en bits)
    let binaryString = '';//almacenara un string, a cada string se le suma 1 caracter por cada 8bites/1byte gracias a String.fromCharCode que transforma cada byte en 1 caracter, los � son datos que el navegador no puede representar
    for (let i = 0; i < byteArray.length; i++) {//1 recorrido por cada byte
      binaryString += String.fromCharCode(byteArray[i]);//byteArray[i] nos dara cada byte, String.fromCharCode() transformara el byte de DECIMAL a caracter UTF-16,+= sumara el caracter a binaryString 
    }
    const base64String = btoa(binaryString);//btoa() funcion que transforma caractes de UTF-16 c/u a Base64 
    imgSrc='data:'+product?.ProductComplete?.productImages[0].mimetype+';base64,'+base64String //agregamos lo necesario para que se pueda representar en <img>
    // console.log(imgSrc)
  }else{
    if(imgSrc=product?.ProductComplete?.images?.image1){
      imgSrc=product?.ProductComplete?.images.image1
    }else{
      imgSrc='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixsector.com%2Fcache%2F517d8be6%2Fav5c8336583e291842624.png&f=1&nofb=1&ipt=f0dd3636f84b1ff677873f0bacc0999feaa87f94ce139855b0cdc836bf7246f3&ipo=images'
    }
  }

  const addToCart=async (productId)=>{
  //   console.log('eeee')
    const email='user8@gmail.com'
  const res = await fetch(`/api/cart/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email:email,
      // pasword:'',
      productId:productId,  
    }),
  });
  // console.log(productId,email)
  // console.log(await res.json())
  if(res.ok){
    contexto.setNotificationText('Added to cart!')
  }else{
    contexto.setNotificationText('Error')
  }


  }

  // console.log(product)
  return (
    <div className='product__container'>
      {getNotificationText&& <FloatingNotification notificationText={getNotificationText}></FloatingNotification>}
        
        <header>
          <p>{product?.condition}</p>
          <div className='porduct--qualification__container'>
            {/* <p className='porduct--qualification__qualification-number'>{product?.qualification}</p> */}
            <BadgetStars qualification={product?.qualification} />
            <p>(560)</p>
          </div>
        </header>

        <p className='product__title'>{product?.title}</p>
        <div className='product--img__contiainter'>
          <></>
          <img className='product__img' src={imgSrc} alt="" />
        </div>
        <p className='prodcut__price'>${product?.price}</p>
        <div className='product__shipment--container'>
          <ShippingSVG width={'24px'} fill={"#696969"}></ShippingSVG>
          <p className='prodcut__shipment'>{product?.shipment == 0 ? <BadgetFreeShipping /> : '‎ $' + product?.shipment}</p>
        </div>
        <p className='product__stock'>{`Stock(${product?.ProductComplete?.stock})`}</p>
        <Link href={'/product/buy/'+product?.id}>
        <button /* onClick={()=>{router.push('/product/buy/'+product?.id)}} */ className='btn btn__buy'>Buy now</button>
        </Link>
        <button onClick={()=>{addToCart(product.id)}} className='btn btn__cart'>Add to cart</button>
        <div>
          <p className='product__description--title'>Description</p>
          <p className='product__description--content'>{product?.ProductComplete?.description}</p>
        </div>
        <p className='porduct__seller'>Seller:{product?.seller}</p>
        {/* <p>{product?.description}</p> */}

    </div>
  )
}

export default ProductMain
//link en caso de necesitar una imagen de muestra
//https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixsector.com%2Fcache%2F517d8be6%2Fav5c8336583e291842624.png&f=1&nofb=1&ipt=f0dd3636f84b1ff677873f0bacc0999feaa87f94ce139855b0cdc836bf7246f3&ipo=images