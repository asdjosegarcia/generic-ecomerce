'use client'
import React, { useContext, useEffect, useState } from "react";
import { variableContext } from "../context/contexto.jsx";
import './ProductList.css'
import ProductCard from '../components/ProductCard'
import Loading from "../components/Loading.jsx";


let apiUrl = '';//por defecto sera 0
let productList = []//por defecto no habran productos para renderizar
let paramsUrl = '';
const ProductList = () => {//ccrea la lista de productos
  const [getLoading, setLoading] = useState(true);//si se esta cargando la lista de productos
  const contexto = useContext(variableContext)


  useEffect(() => {
    const onlyTrue = Object.keys(contexto.getUrlParams).filter(propiedad => contexto.getUrlParams[propiedad] === true);
    //Objet.keys convierte las propiedades en array, filter recorre el arrray y filtra las propiedades que sean true
    paramsUrl = onlyTrue.join('')//eliminamos las '' de array convirtiendolo asi en una cadena de texto
    if(contexto.getUrlParams.search === 'search=' && paramsUrl===''){//si no hay nada en searh ni params
      apiUrl = '/api/products/'
    }else{
      paramsUrl = paramsUrl + contexto.getUrlParams.search //le agregamos el contenido del input
      apiUrl = `/api/products/filter-by/${paramsUrl}` //las commilas del final se agregan para evitar un error en la peticion
    }
    console.log(apiUrl)

    setLoading(true)//establecemos que inicio la carga


    fetch(apiUrl)//realizamos una peticion get a parametro de la url.id
      .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
      .then(data => {
        // console.log(data)//mostramos el array de prodcutoss
        productList = data; //cargamos los datos a la lista de procutos
        setLoading(false)//indicamos que ya dejo de cargar y creamos un renderizado
      })

  }, [contexto.getProductListURL, contexto.getUrlParams])


  return (
    <div className='product-list__container'>
      {!getLoading ? productList.map((product, index) => (<ProductCard key={index} product={product}></ProductCard>)) : <Loading></Loading>}

    </div>
  )
}

export default ProductList