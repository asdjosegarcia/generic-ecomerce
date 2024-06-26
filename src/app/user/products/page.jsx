"use client"
import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';
import UserProductCard from '@/components/molecules/UserProductCard';
import MainAddButton from '@/components/atoms/MainAddButton';
import PlusSVG from '@/SVG/PlusSVG';
import Loading from '@/components/templates/Loading';
import NothingHere from '@/components/organisms/NothingHere';
import "./UserProductPage.css"
import Link from 'next/link'




const page = () => {
  const { data: session } = useSession();//cargamos datos del usuario en session   
  const [getProducts, setProducts] = useState(null)
  const [getReaload, setReload] = useState(false)
  const [getLoading, setLoading] = useState(true)



  useEffect(() => {
    const request = async () => {
      if (session?.user) {
        const res = await fetch(`/api/user/products`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userEmail: session?.user.email }),
        });
        const data = await res.json();
        setProducts(data)
        setLoading(false)
      }
    }
    request()
  }, [session, getReaload])


  return (
    <>
      {(getLoading) ?
        <Loading />
        :
        <>
          <div className='UserProductPage'>
            {(getProducts?.products.length > 0) ?
              <div className=' UserProductPage_product-card'>
                {getProducts.products.map((product, index) => (<UserProductCard getReaload={getReaload} setReload={setReload} key={index} product={product}></UserProductCard>))}
                <Link href='/product/new/'>
                  <MainAddButton text={"Trade"} icon={<PlusSVG></PlusSVG>}></MainAddButton>
                </Link>
              </div>
              :
              <NothingHere buttonText={"Create a product!"} redirectLink={"/product/new/"} buttonIcon={<PlusSVG /> } />
            }
          </div>
        </>
      }
    </>
  )
}

export default page