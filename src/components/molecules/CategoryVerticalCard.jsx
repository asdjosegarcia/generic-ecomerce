'use client'
import React,{useContext} from 'react'
import { variableContext } from "@/context/contexto";
import './CategoryVerticalCard.css'

let imgSrc;
const CategoryVerticalCard = (props) => {
  const contexto = useContext(variableContext)
  console.log("category",props.category);
  if(props.category?.categoryImg?.imgUrl!== undefined){
    imgSrc=contexto.bytesToBase(props.category?.categoryImg?.data.data,props.category?.categoryImg?.mimetype)
    // console.log('data',props.category?.categoryImg);
  }else{
    imgSrc='urlImg',props.category?.categoryImg?.imgUrl;
  }
  return (
    <div className='CategoryVerticalCard CategoryVerticalCard__container '>
      <img className='CategoryVerticalCard__img' src={imgSrc}></img>
      <h1 className='CategoryVerticalCard__title'>{props.category.name}</h1>
    </div>
  )
}

export default CategoryVerticalCard
