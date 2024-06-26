'use client'
import React, { useState, useEffect, useContext } from 'react'
import CartList from '@/components/organisms/CartList'
import { variableContext } from "@/context/contexto";
import { useSession } from 'next-auth/react';
import Loading from '@/components/templates/Loading';
import ProductsSumary from '@/components/molecules/ProductsSumary';
import './UserCartPage.css'
// import { useRouter } from 'next/navigation'




const Cart = () => {
  const contexto = useContext(variableContext)
  const { data: session } = useSession();//cargamos datos del usuario en session   
  const [getLoading, setLoading] = useState(true)


  useEffect(() => {
    if (session) {//si params.id tiene algo
      const request = async () => {
        const res = await fetch(`/api/cart`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: session.user.email }),
        });
        const data = await res.json();
        contexto.setCart({ ...contexto.getCart, products: data.products, porductsQuantity: data.products.length })//cargamos el array de porductos en el contexto
        setLoading(false)
      }
      request()
    }
  }, [contexto.getNotificationText, contexto.getUserData,])
  useEffect(() => { }, [contexto.getCart])
  const updateDbCart = async () => {

    const productsToSend = contexto.getCart.products.map((product) => {
      return ({ id: product.id, quantity: product.cartProductQuantities[0].quantity })
    })

    const res = await fetch(`/api/cart`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: session.user.email,
        products: productsToSend
      }),
    });
    // const data = await res.json();
  }

  return (
    <>
      {(getLoading) ?
        <Loading />
        :
        <div className='UserCartPage'>
          {contexto.getCart.products ?
            <div >
              <CartList products={contexto.getCart.products}></CartList>
              <ProductsSumary function={updateDbCart} products={contexto.getCart.products}></ProductsSumary>
            </div>
            :
            <Loading></Loading>
          }
        </div>
      }
    </>
  )
}

export default Cart