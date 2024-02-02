'use client'
import React,{useEffect, useState} from 'react'
import './VerticalProductList.css'
import VerticalProductCard from '@/components/molecules/VerticalProductCard';
import Link from 'next/link';


let onlyExecute=true
const VerticalProductList = (props) => {
  const [getProducts,setProducts]=useState(null)
  // console.log(props.link)


  useEffect(() => {
    if(props?.link && onlyExecute){
      fetch(props.link)//realizamos una peticion get a parametro de la url.id
      .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
      .then(data => {                    
          setProducts(data[0].products)
      })
      onlyExecute=false
    }
  }, [])
  
  
  return (
    <div className='vertical-product__container'>
        <span className='vertical-product__title-container'>
        <p className='vertical-product__title'>{props?.title}</p>
        {
          props?.viewMore &&(
            <Link href={'/'}>
            <p>{viewMore}</p>
            </Link>
          )
        }
        </span>
        {
        getProducts?.map((product,index)=>(<VerticalProductCard product={product} key={product.id}></VerticalProductCard>))
        }
        
    </div>

  )
}

export default VerticalProductList