'use client'
import React,{useState,useEffect} from 'react'
import CategoryVerticalCard from '../molecules/CategoryVerticalCard'
import './VerticalCategoriesList.css'

const VerticalCategoriesList = (props) => {
    const [getCategories,setCategories]=useState(null)

    // console.log('request');
    useEffect(() => {
      if(props?.link && getCategories==null){//si getProduct ya tiiene los productos evitamoshacer otra recarga
        fetch(props.link)//realizamos una peticion get a parametro de la url.id
        .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
        .then(data => {                    
            setCategories(data)
            // console.log(data);
        })
      }
    }, [props.link])
  return (
    <div className='VerticalCategoriesList VerticalCategoriesList__container'>
        {getCategories&& 
        getCategories.map((category,index)=><CategoryVerticalCard category={category} key={index} />)
        }
      
    </div>
  )
}

export default VerticalCategoriesList
