'use client'
import React, { useState } from "react";
// import { createContext, useContext } from 'react';

export const variableContext=React.createContext();//creamos un context

export function FuncionProvider({children}){//creamos la funcion que encapsulara los valores y luego encapsulara el componente principal de la app
    const[texto,setTexto]=useState('no nacimos para perder')//lo que vamos a compartir en toda la app
    return (
        <variableContext.Provider
         value={{
                texto,setTexto,
            }}
         >{/* value almacena lo que queremos entregar a el resto de la app */}
            {children} {/* un children por que aqui entrar el elemento que encapsulemos */}
        </variableContext.Provider>
    )
}


