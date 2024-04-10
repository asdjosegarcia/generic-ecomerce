'use client'
import React, { useEffect, useState } from 'react'
import ProductMain from '@/components/templates/ProductMain'
// import CommentList from '@/containers/CommentList'
import PorductQuestionList from '@/components/organisms/ProductQuestionList'
import Loading from '@/components/templates/Loading'
import { useSession } from 'next-auth/react';


// import { useRouter } from 'next/navigation'


const page = ({ params }) => {//recivimos la id del producto en el que clikeamos como un {id:5}
  const [getProduct, setProduct] = useState(null)//aqui cargaremos los datos del produto
  const [getLoading,setLoading]=useState(true)
  const { data: session } = useSession();//cargamos datos del usuario en session   

  useEffect(() => {
    if (params.id ) {//si params.id tiene algo
      const request=async ()=>{
        const res = await fetch(`/api/products/completeproducts/${params.id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userEmail:session?.user?.email}),
        });
        const data = await res.json();
        // console.log(await data)
        setProduct(data)
        setLoading(false)
      }
      request()
    }
  }, [session])



  return (
    <>
      {(!getLoading && getProduct) ?
        <>
          <ProductMain product={getProduct}></ProductMain>
          <PorductQuestionList product={getProduct}></PorductQuestionList>
        </>
        :
        <Loading/>
    }
        </>
  )
}

      export default page