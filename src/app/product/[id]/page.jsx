'use client'
import React, { useEffect,useState } from 'react'
import ProductMain from '@/containers/ProductMain'
// import { useRouter } from 'next/navigation'


const page = ({ params }) => {//recivimos la id del producto en el que clikeamos como un {id:5}
  const [getProduct,setProduct]=useState()//aqui cargaremos los datos del produto

  useEffect(() => {
    if (params.id) {//si params.id tiene algo
      fetch(`/api/products/${params.id}`)//realizamos una peticion get a parametro de la url.id
        .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
        .then(data => {
          setProduct(data)
        })
    }
  }, [])



  return (
    <>
      <div>hola</div>
      <ProductMain product={getProduct}></ProductMain>
      
    </>
  )
}

export default page