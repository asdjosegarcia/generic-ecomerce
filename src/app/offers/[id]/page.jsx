'use client'
import React,{useState,useEffect} from 'react'

const page = ({params}) => {
    {params.id}
    // const [getProducts,setProducts]=useState(null)

    // console.log('request');
    // useEffect(() => {
    //   if(/* props?.link && */ getProducts==null){//si getProduct ya tiiene los productos evitamoshacer otra recarga
    //     fetch(`${}`)//realizamos una peticion get a parametro de la url.id
    //     .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
    //     .then(data => {                    
    //         setProducts(data)
    //         // console.log(data);
    //     })
    //   }
    // }, [props.link])
  return (
    <div>
    </div>
  )
}

export default page
