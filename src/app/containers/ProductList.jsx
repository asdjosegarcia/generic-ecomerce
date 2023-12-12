'use client'
import React, { useContext, useEffect, useState } from "react";
import { variableContext } from "../context/contexto.jsx";
import './ProductList.css'
import ProductCard from '../components/ProductCard'
import Loading from "../components/Loading.jsx";


let apiUrl = '';//por defecto sera 0
let productList = []//por defecto no habran productos para renderizar
const ProductList = () => {//ccrea la lista de productos
  const [getLoading, setLoading] = useState(true);//si se esta cargando la lista de productos
  const contexto = useContext(variableContext)
  useEffect(() => {
    setLoading(true)//
    if (contexto.getOrderBy == '') {
      apiUrl = '/api/products/'//url para trar todos los productos
    } else {
      apiUrl = `/api/products/order-by/${contexto.getOrderBy}`//url para ordenar los productos segun elijamos
    }
    fetch(apiUrl)//realizamos una peticion get a parametro de la url.id
      .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
      .then(data => {
        // console.log(data)//mostramos el array de prodcutoss
        productList = data; //cargamos los datos a la lista de procutos
        setLoading(false)//indicamos que ya dejo de cargar y creamos un renderizado
      })

  }, [contexto.getOrderBy])


  return (
    <div className='product-list__container'>

      {!getLoading ? productList.map((product, index) => (<ProductCard key={index} product={product}></ProductCard>)) : <Loading></Loading>}

    </div>
  )
}

export default ProductList