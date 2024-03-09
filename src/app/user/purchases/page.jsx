"use client"
import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';
import Loading from '@/components/templates/Loading';
import NothingHere from '@/components/organisms/NothingHere';
import PlusSVG from '@/SVG/PlusSVG';
import UserPurchasedCard from '@/components/molecules/UserPurchasedCard';



const page = () => {
  const { data: session } = useSession();//cargamos datos del usuario en session   
  const [getProducts, setProducts] = useState(null)
  const [getReaload, setReload] = useState(false)
  const [getLoading, setLoading] = useState(true)


  useEffect(() => {
    const request = async () => {
      if (session?.user) {
        console.log('request')
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
  }, [session, getReaload])

  // console.log(getProducts)

  return (
    <div>
      {(getLoading) ?
        <Loading />
        :
        <>
          {(getProducts?.length > 0) ?
            <>
            { getProducts&& getProducts.map((product, index) => (<UserPurchasedCard product={product} key={index} progress={Math.floor(Math.random() * 70) + 5}  ></UserPurchasedCard>))}
            </>
          :
          <NothingHere buttonText={"Add Purchases"} buttonIcon={<PlusSVG/>} redirectLink={"/"} />
            }
        </>
      }


    </div>
  )
}

export default page