'use client'
import VerticalProductList from '@/components/organisms/VerticalProductList'
import React,{useState,useEffect} from 'react'

const Page = ({params}) => {
  const [getProducts,setProducts]=useState(null)
  useEffect(() => {
    if(params.id!==null && getProducts==undefined){
      const request=async ()=>{
        const res = await fetch(`/api/offers`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({categoryId:params.id}),
        });
        const data = await res.json();
          // console.log(await data)
          setProducts(data)
        }
        request()
      }
    }, [params.id])
    // console.log(getProducts);
  

  return (
    <div>
      {getProducts &&
      <VerticalProductList products={getProducts} ></VerticalProductList>
      }

    </div>
  )
}

export default Page
