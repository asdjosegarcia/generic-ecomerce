'use client'
import VerticalProductList from '@/components/organisms/VerticalProductList'
import React, { useState, useEffect } from 'react'
import './OffersIdPage.css'

const Page = ({ params }) => {
  const [getProducts, setProducts] = useState(null)
  useEffect(() => {
    if (params.id !== null && getProducts == undefined) {
      const request = async () => {
        const res = await fetch(`/api/offers`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ categoryId: params.id }),
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
    <div className='OffersIdPage'>
      {getProducts &&
        <>
          <h1>{getProducts.name} </h1>
          <h2>-75% OFF</h2>
          <VerticalProductList products={getProducts} ></VerticalProductList>
        </>
      }

    </div>
  )
}

export default Page
