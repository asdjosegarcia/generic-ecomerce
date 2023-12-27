"use client"
import React, {useEffect, useState } from 'react'


const CommentList = ({product}) => {
  const [getComments,setComments]=useState()
  

  useEffect(() => {

  if (product?.id) {//si params.id tiene algo
    // console.log('ejecucion')
    fetch(`/api/comments/${product?.id}`)//realizamos una peticion get a parametro de la url.id
    .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
    .then(data => {
      setComments(data)
      // console.log('data',data)
    })
    
    
  }
  }, [])
  
  return (
    <div>
      {/* {!getLoading ? productList.map((product, index) => (<ProductCard key={index} product={product}></ProductCard>)) : <Loading></Loading>} */}

    </div>
  )
}

export default CommentList