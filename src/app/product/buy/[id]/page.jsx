'use client'
import React, { useEffect,useState } from 'react'
import CreditCardForm from '@/components/organisms/CreditCardForm'
import ProductCard from '@/components/molecules/ProductCard'


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
// console.log(getProduct);

 

  return (
    <>
    {getProduct &&(
        <ProductCard product={getProduct}></ProductCard>)
    }
    <CreditCardForm products={[getProduct]} quantity={1}></CreditCardForm>
      

      
    </>
  )
}

export default page