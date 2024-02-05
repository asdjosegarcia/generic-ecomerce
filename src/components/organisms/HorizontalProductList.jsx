'use client'
import React,{useEffect, useState} from 'react'
import './HorizontalProductList.css'
import VerticalProductCard from '@/components/molecules/VerticalProductCard';
import Link from 'next/link';

const HorizontalProductList = (props) => {
  const [getProducts,setProducts]=useState(null)

  
  useEffect(() => {
    if(props?.link && getProducts==null){//si getProduct ya tiiene los productos evitamoshacer otra recarga
      fetch(props.link)//realizamos una peticion get a parametro de la url.id
      .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
      .then(data => {                    
          setProducts(data[0].products)
      })
    }
  }, [props.link])
  
  
  return (
    <div className='horizontal-product__container'>
        <span className='horizontal-product__title-container'>
        <p className='horizontal-product__title'>{props?.title}</p>
        {
          props?.viewMore &&(
            <Link href={'/'}>
            <p>{viewMore}</p>
            </Link>
          )
        }
        </span>
        <div className={'horizontal-product__cards-container'}>
        {
        getProducts?.map((product,index)=>(<VerticalProductCard product={product} key={product.id}></VerticalProductCard>))
        }
        </div>
        
    </div>

  )
}

export default HorizontalProductList