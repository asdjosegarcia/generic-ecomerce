'use client'
import React, { useContext, useEffect, useState } from 'react'
import { variableContext } from "@/context/contexto";
import { useSession } from 'next-auth/react';
import CreditCardForm from '@/components/organisms/CreditCardForm'
import CircleImgList from '@/components/organisms/CircleImgList';
import './BuyPage.css'

const page = () => {
  const contexto = useContext(variableContext)
  const [getProducts, setProdcuts] = useState()
  const { data: session } = useSession();//cargamos datos del usuario en session   

  useEffect(() => {
    if (session /* && !contexto.getCart.prodcuts */) {
      // console.log('HOLA');
      const request = async () => {
        const res = await fetch(`/api/cart`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: session.user.email }),
        });
        const data = await res.json();
        // console.log(data);
        contexto.setCart({ ...contexto.getCart, products: data.products, porductsQuantity: data.products.length })//cargamos el array de porductos en el contexto
      }
      request()
    }
  }, [session])
  // console.log(contexto.getCart.products);

  let totalProductsPrice = contexto.getCart.products.reduce((accumulator, product) => {//suma del precio de todos los productos
    return accumulator + (product.price * product.cartProductQuantities[0].quantity)
  }, 0)
  let quantityOfProducts = contexto.getCart.products.reduce((accumulator, product) => {//cantidad de prodcutos
    return accumulator + (1 * product.cartProductQuantities[0].quantity)
  }, 0)





  return (
    <div className='ProductBugPage'>
      <section >
        <CircleImgList products={contexto.getCart.products} />
      </section>
      <section className='ProductBugPage__summary--section'>
        <h2 className='ProductBugPage__summary--title'>Summary</h2>
        <div className='ProductBugPage__summary--prodcuts-container'>
        <p className='ProductBugPage__summary--prodcuts'>Prodcuts</p>
        <p className='ProductBugPage__summary--prodcuts-price'>x {quantityOfProducts}</p>
        </div>
        <div className='ProductBugPage__summary--total-container'>
        <p className='ProductBugPage__summary--total'>Total:</p>
        <p className='ProductBugPage__summary--total-price'>${totalProductsPrice}</p>
        </div>
      </section>
      <CreditCardForm products={contexto.getCart.products}></CreditCardForm>
    </div>
  )
}

export default page
