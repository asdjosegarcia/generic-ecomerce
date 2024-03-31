// 'use client'
import React, { useEffect, useState, useContext } from 'react'
import Loading from '@/components/templates/Loading'
import BadgetFreeShipping from '@/components/atoms/BadgetFreeShipping'
import BadgetStars from '@/components/molecules/BadgetStars'
import './ProductMain.css'
import ShippingSVG from '@/SVG/ShippingSVG'
import { useRouter } from 'next/navigation'
import FloatingNotification from '@/components/atoms/FloatingNotification'
import Link from 'next/link'
import DisabledFavoriteButton from '../atoms/DisabledFavoriteButton'
import EnabledFavoriteButton from '../atoms/EnabledFavoriteButton'
import { variableContext } from "@/context/contexto";
import { useSession } from 'next-auth/react';
import CartInputNumber from '../molecules/CartInputNumber'
import InputWithButtons from '../molecules/InputWithButtons'





let imgSrc;
let quantityPrice
const ProductMain = ({ product }) => {
  const router = useRouter();
  const [getFavorite, setFavorite] = useState(product?.favorite)
  const contexto = useContext(variableContext)
  const { data: session } = useSession();//cargamos datos del usuario en session   
  const [getNotificationText, setNotificationText] = useState(null)
  const [getproductQuantity,setproductQuantity]=useState(1)
  // console.log(product?.favorite);

  if (product?.ProductComplete?.productImages[0]?.data) {
    const byteArray = new Uint8Array(product?.ProductComplete?.productImages[0].data.data);//creamos un Unit8Array que no almacena los array en grupos aunque asi lo mustre firefox, sino en un valor de 8bits/1 byte(datos binarios de 8 bits 0 a 255) ej 125,0,5,3,etc (datos codificados en bits)
    let binaryString = '';//almacenara un string, a cada string se le suma 1 caracter por cada 8bites/1byte gracias a String.fromCharCode que transforma cada byte en 1 caracter, los � son datos que el navegador no puede representar
    for (let i = 0; i < byteArray.length; i++) {//1 recorrido por cada byte
      binaryString += String.fromCharCode(byteArray[i]);//byteArray[i] nos dara cada byte, String.fromCharCode() transformara el byte de DECIMAL a caracter UTF-16,+= sumara el caracter a binaryString 
    }
    const base64String = btoa(binaryString);//btoa() funcion que transforma caractes de UTF-16 c/u a Base64 
    imgSrc = 'data:' + product?.ProductComplete?.productImages[0].mimetype + ';base64,' + base64String //agregamos lo necesario para que se pueda representar en <img>
    // console.log(imgSrc)
  } else {
    if (imgSrc = product?.ProductComplete?.images?.image1) {
      imgSrc = product?.ProductComplete?.images.image1
    } else {
      imgSrc = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixsector.com%2Fcache%2F517d8be6%2Fav5c8336583e291842624.png&f=1&nofb=1&ipt=f0dd3636f84b1ff677873f0bacc0999feaa87f94ce139855b0cdc836bf7246f3&ipo=images'
    }
  }
////////////////////Añadir a el carrito
  const addToCart = async (productId) => {
    if (session?.user.email) {
      const email = session?.user.email
      const res = await fetch(`/api/cart/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          // pasword:'',
          productId: productId,
          quantity:getproductQuantity,
        }),
      });
      if (res.ok) {
        contexto.setNotificationText('Added to cart!')
      } else {
        contexto.setNotificationText('Error')
      }
    }else{
      router.push('/auth/login');
    }
  }
  ////////////////////calcular precio segun cantidad
    quantityPrice=(product?.price*getproductQuantity).toFixed(2)

  return (
    <div className='product__container'>
      {getNotificationText && <FloatingNotification notificationText={getNotificationText}></FloatingNotification>}

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
        {/* ////////////////////////////////////////////////////// */}
        <span className='prodcut__favorite-button' >{(getFavorite) ?
          <EnabledFavoriteButton favorite={setFavorite} email={session?.user.email} productId={product.id} notification={contexto.setNotificationText} />
          :
          <DisabledFavoriteButton favorite={setFavorite} email={session?.user.email} productId={product.id} notification={contexto.setNotificationText} />}
        </span>
        <img className='product__img' src={imgSrc} alt="" />
      </div>
      <p className='prodcut__price'>${product?.price}</p>
      <div className='product__shipment--container'>
        <ShippingSVG width={'24px'} fill={"#696969"}></ShippingSVG>
        <p className='prodcut__shipment'>{product?.shipment == 0 ? <BadgetFreeShipping /> : '‎ $' + product?.shipment}</p>
      </div>
      <p className='product__stock'>{`Stock(${product?.ProductComplete?.stock})`}</p>
      <section className='product__input--container'>
      <InputWithButtons currentValue={getproductQuantity} newValue={setproductQuantity}></InputWithButtons>
      <p>=${quantityPrice}</p>
      </section>
      <Link href={'/product/buy/' + product?.id}>
        <button /* onClick={()=>{router.push('/product/buy/'+product?.id)}} */ className='btn btn__buy'>Buy now</button>
      </Link>
      <button onClick={() => { addToCart(product.id) }} className='btn btn__cart'>Add to cart</button>
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