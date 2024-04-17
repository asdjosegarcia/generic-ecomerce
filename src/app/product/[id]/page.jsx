'use client'
import React, { useEffect, useState } from 'react'
import ProductMain from '@/components/templates/ProductMain'
import PorductQuestionList from '@/components/organisms/ProductQuestionList'
import Loading from '@/components/templates/Loading'
import { useSession } from 'next-auth/react';
import './ProductByIdPage.css'
import ProtectedPurchase from '@/components/organisms/ProtectedPurchase'


// import { useRouter } from 'next/navigation'


const page = ({ params }) => {//recivimos la id del producto en el que clikeamos como un {id:5}
  const [getProduct, setProduct] = useState(null)//aqui cargaremos los datos del produto
  const [getLoading, setLoading] = useState(true)
  const { data: session } = useSession();//cargamos datos del usuario en session   
  const [getDesktopMenu, setDesktopMenu] = useState(false)


  ///////////////////////peticion del producto y deteccion de pantalla del usuario
  useEffect(() => {
    if (params.id) {//si params.id tiene algo
      const request = async () => {
        windowSize()//establecemos si el usuario esta en desktop o mobile
        const res = await fetch(`/api/products/completeproducts/${params.id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userEmail: session?.user?.email }),
        });
        const data = await res.json();
        // console.log(await data)
        setProduct(data)
        setLoading(false)
      }
      request()
    }
  }, [session])
  
  //////////////////////detectamos tamaño de apntalla, por lo general para saber si estamos en desktop o mobile
  const windowSize = () => {
    if (window.innerWidth > 800) {//si es mayor a 800 estamos en desktop
      // desktop = true
      setDesktopMenu(true)
    } else {
      setDesktopMenu(false)
    }
  }
  if (typeof window !== 'undefined') {// si windows no es un defined, esto para evitar errores al generar el build, ya que da problemas por no estar en un navegaor sino en el servidor
    window.addEventListener('resize', function (event) { //detecta cuando el tamaño de la pantalla cambia y ejecuta
      windowSize()
    });
  }
  
  
  
  return (
    <>
      {(!getLoading && getProduct) ?
        <div className='ProductByIdPage'>
          <ProductMain product={getProduct} dektop={getDesktopMenu}></ProductMain>
          <PorductQuestionList product={getProduct}></PorductQuestionList>
          <ProtectedPurchase></ProtectedPurchase>
        </div>
        :
        <Loading />
      }
    </>
  )
}

export default page