'use client'
import React,{useState,useEffect,useContext} from 'react'
import CartList from '@/containers/CartList'
import { variableContext } from "@/context/contexto";


const Cart = () => {
  const contexto = useContext(variableContext)
  const [getProducts,setProducts]=useState(null)//aqui cargaremos los datos del produto

  useEffect(() => {
    // if (params.id) {//si params.id tiene algo
      fetch(`/api/cart/2`)//realizamos una peticion get a parametro de la url.id
        .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
        .then(data => {
          setProducts(data)
        })
    // }
  }, [contexto.getNotificationText])
  return (
    <div>
      {getProducts &&(
        <CartList products={getProducts.products}></CartList>
      )}
    </div>
  )
}

export default Cart