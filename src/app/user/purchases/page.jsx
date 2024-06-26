"use client"
import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';
import Loading from '@/components/templates/Loading';

import NothingHere from '@/components/organisms/NothingHere';
import PlusSVG from '@/SVG/PlusSVG';
import UserPurchasedCard from '@/components/molecules/UserPurchasedCard';
import './PurchasesPage.css'



const page = () => {
  const { data: session } = useSession();//cargamos datos del usuario en session   
  const [getProducts, setProducts] = useState(null)
  const [getLoading, setLoading] = useState(true)



  useEffect(() => {
    const request = async () => {
      if (session) {
        const res = await fetch(`/api/user/purchases`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userEmail: session?.user.email }),
        });
        const data = await res.json();
        setProducts(data.purchasedProduct)
        setLoading(false)
      }
    }
    request()
  }, [session])

  // console.log(getProducts)

  return (
    <>
    {(getLoading) ?
      <Loading />
      :
      <div className='PurchasesPage'>
        <>
          {(getProducts?.length > 0) ?
            <>
              {getProducts && getProducts.map((product, index) => (<UserPurchasedCard product={product} key={index} progress={Math.floor(Math.random() * 70) + 5}  ></UserPurchasedCard>))}
            </>
            :
            <NothingHere buttonText={"Add Purchases"} buttonIcon={<PlusSVG />} redirectLink={"/"} />
          }
        </>
        </div>
      }
    </>
  )
}

export default page