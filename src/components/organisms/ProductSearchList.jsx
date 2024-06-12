'use client'
import React, { useContext, useEffect, useState } from "react";
import { variableContext } from "@/context/contexto.jsx";
import './ProductSearchList.css'
import ProductCard from '@/components/molecules/ProductCard.jsx'
import Loading from "@/components/templates/Loading.jsx";
import { useSession } from 'next-auth/react';




let apiUrl = '';//por defecto sera ''
let productList = []//por defecto no habran productos para renderizar
let paramsUrl = '';
const ProductSearchList = ({params,getLoading,setLoading}) => {//ccrea la lista de productos
  // const [getLoading, setLoading] = useState(true);//si se esta cargando la lista de productos
  const contexto = useContext(variableContext)
  const { data: session } = useSession();//cargamos datos del usuario en session   




  useEffect(() => {
    if (apiUrl == '') {
      // const onlyTrue = Object.keys(contexto.getUrlParams).filter(propiedad => contexto.getUrlParams[propiedad] === true);
      // //Objet.keys convierte las propiedades en array, filter recorre el arrray y filtra las propiedades que sean true
      // paramsUrl = onlyTrue.join('')//eliminamos las '' de array convirtiendolo asi en una cadena de texto
      // if (contexto.getUrlParams.search === 'search=' && contexto.getUrlParams.orderBy === 'orderby=' && paramsUrl === ''  /* && contexto.getUrlParams.orderBy==='most-relevant' */) {//si no hay nada en searh ni params
      //   apiUrl = '/api/products/'
      // } else {
      //   // console.log(contexto.getUrlParams.search)
      //   paramsUrl = paramsUrl + contexto.getUrlParams.search + contexto.getUrlParams.orderBy //le agregamos el contenido del input + el de orden de busqueda
      //   apiUrl = `/api/products/filter-by/${paramsUrl}` //las commilas del final se agregan para evitar un error en la peticion
      // }
      // console.log(apiUrl)
    } else {


    }
    
    
    
    // setLoading(true)//establecemos que inicio la carga
    const itemsRequest = async () => {
      // console.log('')
      const res = await fetch(`/api/products/filter-by/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...contexto.getUrlParams,userEmail:'user8@gmail.com'}),
      });
      const data = await res.json();
      setLoading(false)
      // console.log(data)
      productList=data
      // console.log(productList)
      if (res.ok) {
        // props.notification('Added')
      } else {
        // props.notification('Error')
      }
      // console.log(contexto.getUrlParams)
    }
    itemsRequest()
    
    ////////peticion a la api
    // fetch(apiUrl)//realizamos una peticion get a parametro de la url.id
    //   .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
    //   .then(data => {
    //     productList = data; //cargamos los datos a la lista de procutos
    //     setLoading(false)//indicamos que ya dejo de cargar y creamos un renderizado
    //   })
    //////cambios a la url
    window.history.replaceState({}, '', `${window.location.pathname}?${paramsUrl.toString()}`);//cambiamos la url
    //window  window.history.replaceState reemplazamos en el hsitorial la pagina actual para mostrar esta url
    //{} desconozco
    //''titulo de pagina
    //${window.location.pathname} ruta actual de la pagina



  }, [contexto.getProductListURL, contexto.getUrlParams])


  return (
    <div className='product-search-list__container'>
      {/* <button onClick={() => { itemsRequest() }}>request</button> */}


      {!getLoading ? 
        productList.map((product, index) => ( <ProductCard key={index} product={product}/>))
       : 
       <></>}
      {/* <button onClick={() => { itemsRequest() }}>request</button> */}
      {/* {getLoading && <Loading></Loading>} */}
      
      

    </div>
  )
}

export default ProductSearchList