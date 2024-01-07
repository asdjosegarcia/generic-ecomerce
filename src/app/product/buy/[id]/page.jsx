'use client'
import React, { useEffect,useState } from 'react'
import ProductBuy from '@/containers/ProductBuy'
import ProductCard from '@/components/ProductCard'


// import { useRouter } from 'next/navigation'


const page = ({ params }) => {//recivimos la id del producto en el que clikeamos como un {id:5}
  const [getProduct,setProduct]=useState(null)//aqui cargaremos los datos del produto

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
    {getProduct &&(
        <ProductCard product={getProduct}></ProductCard>)
    }
    <ProductBuy product={getProduct}></ProductBuy>
      

      
    </>
  )
}

export default page