'use client'
import React, { useContext, useRef  } from 'react'
import './SearchInput.css'
import SearchSVG from '@/SVG/SearchSVG'
import { variableContext } from "@/context/contexto";
import { useRouter } from 'next/navigation'




let searchValue
const SearchInput = () => {
    const router = useRouter();
    const contexto = useContext(variableContext)
    // console.log('contexto',contexto.urlParams.search+"hola") 
    
    const send = (event) => {//funcion que carga los datos y nos redirije
        event.preventDefault();//evitamos la recarga por defecto
        if(searchValue!==undefined){
            contexto.setUrlParams({ ...contexto.getUrlParams, search: '' + searchValue })
        }else{
            contexto.setUrlParams({ ...contexto.getUrlParams, search: '' })
        }
        router.push('/search/e');
    }
    return (
        <>
            <form onSubmit={send}>
                <div className='input__container'>
                    <span className='input__icon'>
                        <SearchSVG width={'40px'} height={'40px'} fill={'#696969'}></SearchSVG>
                    </span>
                    <input ref={contexto.searchRef}  type="text" placeholder='Search' onChange={(e)=>{searchValue=e.target.value}} />
                    {/* <button type="submit" onClick={() => send()}>click</button> */}
                </div>
            </form>
        </>
    )
}

export default SearchInput