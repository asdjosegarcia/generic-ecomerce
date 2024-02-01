'use client'
import React,{useEffect, useState} from 'react'
import './VerticalProductList.css'
import VerticalProductCard from '@/components/molecules/VerticalProductCard';
import Link from 'next/link';



const VerticalProductList = (props) => {
  const [getProducts,setProducts]=useState([])


  useEffect(() => {
    fetch(`${props.link}`)//realizamos una peticion get a parametro de la url.id
    .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
    .then(data => {                    
        setProducts(data.products)
        // console.log(data.products)
    })
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
        <VerticalProductCard></VerticalProductCard>
    </div>

  )
}

export default VerticalProductList