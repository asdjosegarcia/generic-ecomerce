'use client'
import React, { useContext } from 'react'
import Link from 'next/link'
import { variableContext } from "@/context/contexto";
import './CategoryVerticalCard.css'

let imgSrc;
const CategoryVerticalCard = (props) => {
  const contexto = useContext(variableContext)
  // console.log("category", props.category);
  if (props.category?.categoryImg?.imgUrl == null) {
    imgSrc = contexto.bytesToBase(props.category?.categoryImg?.data.data, props.category?.categoryImg?.mimetype)
    // console.log('data',props.category?.categoryImg);
  } else {
    imgSrc = props.category?.categoryImg?.imgUrl;
    // console.log('url',props.category?.categoryImg);

  }
  return (
    <Link href={`/offers/${props.category.id}`}>
      <div className='CategoryVerticalCard CategoryVerticalCard__container '>
        <img className='CategoryVerticalCard__img' src={imgSrc}></img>
        <h1 className='CategoryVerticalCard__title'>{props.category.name}</h1>
      </div>
    </Link>
  )
}

export default CategoryVerticalCard
