'use client'
import { SessionProvider } from 'next-auth/react';
import React, { useState } from "react";
// import { createContext, useContext } from 'react';

export const variableContext=React.createContext();//creamos un context

export function FuncionProvider({children}){//creamos la funcion que encapsulara los valores y luego encapsulara el componente principal de la app
    //lo que vamos a compartir en toda la app
    const [getUrlParams,setUrlParams]=useState({
        freeShipping: false,
        new: false,
        search:'search=',
        orderBy:'orderby=most-relevant'
    })
    const [getProductListURL,setProductListURL]=useState("")
    return (   
         <SessionProvider>{/* lo usamos para tener los datos del usuario en todos los componentes */}
    
        <variableContext.Provider
         value={{
            getProductListURL,setProductListURL,
            getUrlParams,setUrlParams

            }}
         >{/* value almacena lo que queremos entregar a el resto de la app */}
            {children} {/* un children por que aqui entrar el elemento que encapsulemos */}
        </variableContext.Provider>
        </SessionProvider>

    )
}


