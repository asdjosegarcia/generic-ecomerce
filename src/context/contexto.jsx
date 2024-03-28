'use client'
import { SessionProvider } from 'next-auth/react';
import React, { useState, useRef } from "react";



export const variableContext = React.createContext();//creamos un context
//////////////////////////////////img Base64
const bytesToBase=(imgBase,imgMimetype)=>{
    const byteArray = new Uint8Array(imgBase);//creamos un Unit8Array que no almacena los array en grupos aunque asi lo mustre firefox, sino en un valor de 8bits/1 byte(datos binarios de 8 bits 0 a 255) ej 125,0,5,3,etc (datos codificados en bits)
    // console.log(byteArray)
    let binaryString = '';//almacenara un string, a cada string se le suma 1 caracter por cada 8bites/1byte gracias a String.fromCharCode que transforma cada byte en 1 caracter, los � son datos que el navegador no puede representar
    for (let i = 0; i < byteArray.length; i++) {//1 recorrido por cada byte
      binaryString += String.fromCharCode(byteArray[i]);//byteArray[i] nos dara cada byte, String.fromCharCode() transformara el byte de DECIMAL a caracter UTF-16,+= sumara el caracter a binaryString 
    }
    const base64String =  btoa(binaryString);//btoa() funcion que transforma caractes de UTF-16 c/u a Base64 
    return('data:'+imgMimetype +';base64,'+base64String )//agregamos lo necesario para que se pueda representar en <img>
}
/////////////////////////////////Date
const dateIsoToShort=(isoDate,userRegion)=>{
  const date = new Date(isoDate); //creamos un objeto con new date que tiene funciones
  const options = {
    //   weekday: "long", // 'short', 'long', 'narrow' como se va a mostrar el dia de la semana
      year: "numeric", // '2-digit', 'numeric' como se va a mostrar el año
      month: "numeric", // 'short', 'long', 'numeric', '2-digit' como se  va a mostrar el mes
      day: "numeric", // '2-digit', 'numeric' como se va a mostrar el dia
  };
  const formatedDate = date.toLocaleDateString(userRegion/* "en-US" */, options); //en-US formato de region, en este caso eeuu
  return formatedDate
}

export function FuncionProvider({ children }) {//creamos la funcion que encapsulara los valores y luego encapsulara el componente principal de la app
  //lo que vamos a compartir en toda la app
  const searchRef = useRef(null)//useRef para el input
  const focusSearch = () => {//funcion de el boton "search"
    if (searchRef.current) {//verificamos si el input existe antes de enfocarlo
      searchRef.current.focus();//el metodo focus enfoca el input para que el usuario pueda conezar a escribir
    }
  };
  /////////////////////////////////carrito del usuario
  const [getCart,setCart]=useState({
    products:[],
    porductsPrice:{},
    porductsNumber:0,
    porductsQuantity:0,
    total:0,
    totalShipment:0,

  })
  /////////////////////////////////busqueda
  const [getUrlParams, setUrlParams] = useState({//filtros de busqueda que se fusionan
    freeShipping: false,
    new: false,
    search: '',
    orderBy: 'most-relevant',
    userEmail:''
  })
  const [getNotificationText, setNotificationText] = useState(false) //estado que manjea las notificaciones
  const [getNotificationIcon,setNotificationIcon]=useState(false)
  const [getUserData,setUserData]=useState(null)
  const [getProductListURL, setProductListURL] = useState("")
  const [getBackground,setBackground]=useState(false)
  const [getQuestionMenu,setQuestionMenu]=useState(false)
  const [getNewQuestion,setNewQuestion]=useState()
  const [getProductsPrices,setProductsPrices]=useState({})
  const [getProductsShippment,setProductsShipment]=useState({})

  return (
    <SessionProvider >{/* lo usamos para tener los datos del usuario en todos los componentes */}

      <variableContext.Provider
        value={{
          bytesToBase,
          dateIsoToShort,
          getProductListURL, setProductListURL,
          getUrlParams, setUrlParams,
          searchRef, focusSearch,
          getNotificationText, setNotificationText,
          getNotificationIcon,setNotificationIcon,
          // userData,
          getUserData,setUserData,
          getBackground,setBackground,
          getQuestionMenu,setQuestionMenu,
          getNewQuestion,setNewQuestion,
          getProductsPrices,setProductsPrices,
          getCart,setCart,
          getProductsShippment,setProductsShipment
        }}
      >{/* value almacena lo que queremos entregar a el resto de la app */}
        {children} {/* un children por que aqui entrar el elemento que encapsulemos */}
      </variableContext.Provider>
    </SessionProvider>

  )
}
////////componente en el que se va a usar:
//import React, { useContext } from 'react'
//import { variableContext } from "@/context/contexto";
//const contexto = useContext(variableContext)
//contexto.setNotificationText('Added to cart!')


