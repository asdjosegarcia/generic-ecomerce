'use client'
import { SessionProvider } from 'next-auth/react';
import React, { useState, useRef } from "react";




export const variableContext = React.createContext();//creamos un context


export function FuncionProvider({ children }) {//creamos la funcion que encapsulara los valores y luego encapsulara el componente principal de la app
  //lo que vamos a compartir en toda la app
  const searchRef = useRef(null)//useRef para el input
  const focusSearch = () => {//funcion de el boton "search"
    if (searchRef.current) {//verificamos si el input existe antes de enfocarlo
      searchRef.current.focus();//el metodo focus enfoca el input para que el usuario pueda conezar a escribir
    }
  };
  const [getUrlParams, setUrlParams] = useState({//filtros de busqueda que se fusionan
    freeShipping: false,
    new: false,
    search: 'search=',
    orderBy: 'orderby=most-relevant'
  })
  const [getNotificationText, setNotificationText] = useState(false) //estado que manjea las notificaciones
  const [getUserData,setUserData]=useState(null)
  const [getProductListURL, setProductListURL] = useState("")
  const [getQuestionMenu,setQuestionMenu]=useState(false)



  return (
    <SessionProvider >{/* lo usamos para tener los datos del usuario en todos los componentes */}

      <variableContext.Provider
        value={{
          getProductListURL, setProductListURL,
          getUrlParams, setUrlParams,
          searchRef, focusSearch,
          getNotificationText, setNotificationText,
          // userData,
          getUserData,setUserData,
          getQuestionMenu,setQuestionMenu,
        }}
      >{/* value almacena lo que queremos entregar a el resto de la app */}
        {children} {/* un children por que aqui entrar el elemento que encapsulemos */}
      </variableContext.Provider>
    </SessionProvider>

  )
}


