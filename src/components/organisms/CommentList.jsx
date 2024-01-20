"use client"
import React, {useEffect, useState } from 'react'


const CommentList = ({product}) => {
  // const [getComments,setComments]=useState()
  

  // useEffect(() => {

  // if (product?.id) {//si params.id tiene algo

  // }, [])
  // console.log(product)
  
  return (
    <div>
      {/* {!getLoading ? productList.map((product, index) => (<ProductCard key={index} product={product}></ProductCard>)) : <Loading></Loading>} */}
      {product?.ProductComplete.comments.map((comment,index)=>(<p key={index}>{comment.comment}</p>))}

    </div>
  )
}

export default CommentList