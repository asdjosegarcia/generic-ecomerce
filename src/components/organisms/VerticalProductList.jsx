'use client'
import React,{useState,useEffect} from 'react'
import './VerticalProductList.css'
import VerticalProductCard from '../molecules/VerticalProductCard'

const VerticalProductList = (props) => {
    const [getProducts,setProducts]=useState(null)
    useEffect(() => {

      if(props?.link && getProducts==undefined){//si getProduct ya tiiene los productos evitamoshacer otra recarga
        fetch(props.link)//realizamos una peticion get a parametro de la url.id
        .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
        .then(data => {                    
            setProducts(data[0].products)
            // console.log(data[0].products);
        })
      }
    else{
      setProducts(props.products)
      console.log(props.products);
    }
      
    }, [props.link])
// console.log(getProducts);
    
  return (
    <div className="vertical-list__container" >
        <p className="vertical-list__title" >{props.title}</p>
        <div className='vertical-list__cards-container'>
        {
        getProducts?.map((product,index)=>(<VerticalProductCard  product={product} key={product.id}/>))
        }
        </div>
    </div>
  )
}

export default VerticalProductList