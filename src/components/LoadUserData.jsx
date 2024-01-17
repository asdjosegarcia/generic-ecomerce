'use client'
import React,{useContext} from 'react'
import { useSession } from 'next-auth/react';
import { variableContext } from "../context/contexto";


const LoadUserData = () => {
    const { data: session } = useSession();//cargamos datos del usuario en session
    const contexto = useContext(variableContext)

    if(session?.user){
        console.log(session?.user)
        const { name, email, image } = session.user;

    }
    // contexto.

    return (
        <></>
    )
}

export default LoadUserData