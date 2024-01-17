'use client'
import React,{useContext, useEffect} from 'react'
import { useSession } from 'next-auth/react';
import { variableContext } from "../context/contexto";

let onlyExecution=true
const LoadUserData = () => {
    const { data: session } = useSession();//cargamos datos del usuario en session

    const contexto = useContext(variableContext)

    
    if(session?.user && onlyExecution){
        const { name, email,} = session.user;
        fetch(`/api/user/${email}`)//realizamos una peticion get a parametro de la url.id
        .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
        .then(data => {
        //   console.log(data)
          contexto.userData=data//cargamos el objeto que nos devuelve como respuesta a el contexto
        })
        onlyExecution=false
        
    }
    // console.log(contexto.userData)

    return (
        <></>
    )
}

export default LoadUserData