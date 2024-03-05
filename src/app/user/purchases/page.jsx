"use client"
import React,{useState,useEffect} from 'react'
import { useSession } from 'next-auth/react';
import UserPurchasedCard from '@/components/molecules/UserPurchasedCard';
// import UserProductCard from '@/components/molecules/UserProductCard';
// import MainAddButton from '@/components/atoms/MainAddButton';
// import PlusSVG from '@/SVG/PlusSVG';
// import "./UserProductPage.css"
// import Link from 'next/link'




const page = () => {
  const { data: session } = useSession();//cargamos datos del usuario en session   
  const [getProducts,setProducts]=useState(null)
  const[getReaload,setReload]=useState(false)

  
  useEffect(() => {
    const request=async ()=>{
      if(session?.user ){
        console.log('request')
        const res = await fetch(`/api/user/purchases`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userEmail:session?.user.email}),
        });
        const data = await res.json();
        setProducts( data.purchasedProduct)
      }
    }
    request()
  }, [session,getReaload])
  
  // console.log(getProducts)

  return (
    <div>
      {getProducts&& getProducts.map((product,index)=>(<UserPurchasedCard product={product} key={index} progress={Math.floor(Math.random() * 70) + 5}  ></UserPurchasedCard>))}
      
      {/* <ShipmentProgressBar></ShipmentProgressBar> */}

    </div>
  )
}

export default page