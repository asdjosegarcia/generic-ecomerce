'use client'
import React, { useEffect, useState, useContext } from 'react'
import FavoritesList from '@/components/organisms/FavoritesList'
import { useSession } from 'next-auth/react';
import { variableContext } from "@/context/contexto";

import Loading from '@/components/templates/Loading';


const page = () => {
    const contexto = useContext(variableContext)

    const { data: session } = useSession();//cargamos datos del usuario en session   
    const [getProducts, setProducts] = useState(null)//aqui cargaremos los datos del produto


    useEffect(() => {
        if (session) {//si params.id tiene algo
            fetch(`/api/favorites/${session.user.email}`)//realizamos una peticion get a parametro de la url.id
                .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
                .then(data => {
                    setProducts(data.products)
                    // console.log(data.products)
                })
        } else {

        }
    }, [contexto.getNotificationText, contexto.getUserData])
    return (
        <>
            {getProducts ?
                <FavoritesList products={getProducts}></FavoritesList>
                :
                <Loading/>
            }
        </>
    )
}

export default page