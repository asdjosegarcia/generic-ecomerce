'use client'
import React, { useState, useEffect, useContext } from 'react'
import CartList from '@/components/organisms/CartList'
import { variableContext } from "@/context/contexto";
import { useSession } from 'next-auth/react';
import Loading from '@/components/templates/Loading';
import ProductsSumary from '@/components/molecules/ProductsSumary';
// import { useRouter } from 'next/navigation'




const Cart = () => {
  // const router = useRouter();
  const contexto = useContext(variableContext)
  // const [getProducts, setProducts] = useState(null)//aqui cargaremos los datos del produto
  const { data: session } = useSession();//cargamos datos del usuario en session   
  // const [getLoading,setLoading]=useState(true)

  // console.log(session?.user.email)

  useEffect(() => {
    if (session) {//si params.id tiene algo
      const request=async ()=>{
        const res = await fetch(`/api/cart`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email:session.user.email}),
        });
        const data = await res.json();
        contexto.setCart({...contexto.getCart,products:data.products,porductsQuantity:data.products.length})//cargamos el array de porductos en el contexto
          // setProducts(data)
      }
      request()
    } 
  }, [contexto.getNotificationText, contexto.getUserData])
  return (
    <div>
      {contexto.getCart.products ?
        <>
          <CartList products={contexto.getCart.products}></CartList>
          <ProductsSumary products={contexto.getCart.products}></ProductsSumary>
        </>
        :
        <Loading></Loading>
      }
    </div>
  )
}

export default Cart