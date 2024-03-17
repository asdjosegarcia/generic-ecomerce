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

    const allFakeCategory={
      name:'all',
      categoryImg:{
        imgUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fallaboutshoppingtrends.com%2Fwp-content%2Fuploads%2F2017%2F10%2F596073d112a9db0b44194f4d.jpg&f=1&nofb=1&ipt=1cde4dfb1750bc9ca5d9bbaa45a9ad7ee02c7f0253bf53c7689040b6a876ea22&ipo=images'
      }
    }
  return (
    <div className='VerticalCategoriesList VerticalCategoriesList__container'>
      <CategoryVerticalCard category={allFakeCategory}></CategoryVerticalCard>
        {getCategories&& 
        getCategories.map((category,index)=><CategoryVerticalCard category={category} key={index} />)
        }
      
    </div>
  )
}

export default VerticalCategoriesList
