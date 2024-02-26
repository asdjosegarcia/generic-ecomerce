"use client"
import React,{useContext,useState,useEffect} from 'react'
import { useSession } from 'next-auth/react';
import UserProductCard from '@/components/molecules/UserProductCard';


let onlyLoad=true;
const page = () => {
  const { data: session } = useSession();//cargamos datos del usuario en session   
  const [getProducts,setProducts]=useState(null)

  
  const request=async ()=>{
    if(getProducts == null && session?.user && onlyLoad==true){
      onlyLoad=false
      console.log('request')
      const res = await fetch(`/api/user/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userEmail:session?.user.email}),
      });
      const data = await res.json();
      setProducts(await data)
      // console.log(getProducts)
    }
  }
  request()

  return (
    <>
      {getProducts&& getProducts.products.map((product,index)=>(<UserProductCard userEmail={session?.user.email} key={index} product={product}></UserProductCard>))}
    </>
  )
}

export default page