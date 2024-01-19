'use client'
import React,{useState,useEffect,useContext} from 'react'
import CartList from '@/containers/CartList'
import { variableContext } from "@/context/contexto";
import { useSession } from 'next-auth/react';
import Loading from '@/components/Loading';



const Cart = () => {
  const contexto = useContext(variableContext)
  const [getProducts,setProducts]=useState(null)//aqui cargaremos los datos del produto
  const { data: session } = useSession();//cargamos datos del usuario en session   
  // const [getLoading,setLoading]=useState(true)

  // console.log(session?.user.email)

  useEffect(() => {
    if (session) {//si params.id tiene algo
      fetch(`/api/cart/${session.user.email}`)//realizamos una peticion get a parametro de la url.id
        .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
        .then(data => {
          setProducts(data)
        })
    }else{

    }
  }, [contexto.getNotificationText,contexto.getUserData])
  return (
    <div>
      {getProducts?
        <CartList products={getProducts.products}></CartList>
      :
        <Loading></Loading>
      }
    </div>
  )
}

export default Cart