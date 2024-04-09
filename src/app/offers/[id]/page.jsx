'use client'
import VerticalProductList from '@/components/organisms/VerticalProductList'
import React, { useState, useEffect } from 'react'
import './OffersIdPage.css'
import Loading from '@/components/templates/Loading'

const Page = ({ params }) => {
  const [getProducts, setProducts] = useState(null)
  const [getLoading, setLoading] = useState(true)
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
        console.log(await data)
        setProducts(data)
        setLoading(false)
      }
      request()
    }
  }, [params.id])
  // console.log(getProducts);


  return (
    <>
      {(getLoading) ?
        <Loading />
        :
        <>
          <div className='OffersIdPage'>
            {getProducts &&
              <>
                <h1>{getProducts.name} </h1>
                <h2>-75% OFF</h2>
                <VerticalProductList products={getProducts} ></VerticalProductList>
              </>
            }
          </div>
        </>
      }
    </>
  )
}

export default Page
