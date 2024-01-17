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
          console.log(data)
        })
        

        console.log(session)
        // console.log(session.user.name)
        // console.log(session.user.email)

            contexto.userData.username=name
            contexto.userData.email=email
            onlyExecution=false
            // console.log(contexto.userData)
    }

    return (
        <></>
    )
}

export default LoadUserData