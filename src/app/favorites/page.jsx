'use client'
import React, { useEffect, useState, useContext } from 'react'
import FavoritesList from '@/components/organisms/FavoritesList'
import { useSession } from 'next-auth/react';
import { variableContext } from "@/context/contexto";
import NothingHere from '@/components/organisms/NothingHere';
import HeartSVG from '@/SVG/HeartSVG';
import PlusSVG from '@/SVG/PlusSVG';

import Loading from '@/components/templates/Loading';


const page = () => {
    const contexto = useContext(variableContext)

    const { data: session } = useSession();//cargamos datos del usuario en session   
    const [getProducts, setProducts] = useState(null)//aqui cargaremos los datos del produto
    const [getLoading,setLoading]=useState(true)


    useEffect(() => {
        if (session) {//si params.id tiene algo
            // fetch(`/api/favorites/${session.user.email}`)//realizamos una peticion get a parametro de la url.id
            //     .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
            //     .then(data => {                    
            //         setProducts(data.products)
            //         setLoading(false)
            //         // console.log(data.products)
            //     })
            const request=async ()=>{
                const res = await fetch(`/api/favorites`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({email:session.user.email}),
                });
                const data = await res.json();
                  setProducts(data.products)
                    setLoading(false)

              }
              request()
        } 
    }, [contexto.getNotificationText, contexto.getUserData])
    console.log(getProducts)
    return (
        <>
            {(getLoading)? 
            <Loading/>
            : 
            <>
            {(getProducts?.length>0)?
                <FavoritesList products={getProducts}></FavoritesList>
                :
                <NothingHere buttonText={"Add Favorites"} redirectLink={"/"} buttonIcon={<><PlusSVG/> &nbsp; <HeartSVG></HeartSVG></>  }/>
            }
            </>
        }
        </>
    )
}

export default page