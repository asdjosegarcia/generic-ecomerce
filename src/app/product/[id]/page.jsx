'use client'
import React, { useEffect, useState } from 'react'
import ProductMain from '@/components/templates/ProductMain'
// import CommentList from '@/containers/CommentList'
import PorductQuestionList from '@/components/organisms/ProductQuestionList'
import Loading from '@/components/templates/Loading'

// import { useRouter } from 'next/navigation'


const page = ({ params }) => {//recivimos la id del producto en el que clikeamos como un {id:5}
  const [getProduct, setProduct] = useState(null)//aqui cargaremos los datos del produto

  useEffect(() => {
    if (params.id) {//si params.id tiene algo
      fetch(`/api/products/completeproducts/${params.id}`)//realizamos una peticion get a parametro de la url.id
        .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
        .then(data => {
          setProduct(data)
        })
    }
  }, [])



  return (
    <>
      {(getProduct) ?
        <>
          <ProductMain product={getProduct}></ProductMain>
          <PorductQuestionList product={getProduct}></PorductQuestionList>
        </>
        :
        <Loading/>
    }
        </>
  )
}

      export default page