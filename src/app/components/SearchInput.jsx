'use client'
import React, { useContext } from 'react'
import './SearchInput.css'
import SearchSVG from '../SVG/SearchSVG'
import { variableContext } from "../context/contexto";



let searchValue
const SearchInput = () => {
    const contexto = useContext(variableContext)
    // console.log('contexto',contexto.urlParams.search+"hola") 

    const extractSearchValue = (event) => {
        searchValue = event.target.value;
    }
    const send=()=>{
        // console.log('hola')
            contexto.setUrlParams({...contexto.getUrlParams,search:'search='+searchValue})

        // console.log(contexto.getUrlParams)

    }
    return (
        <>
            <div className='input__container'>
                <label htmlFor="search"></label>
                <span className='input__icon'>
                    <SearchSVG width={'40px'} height={'40px'} fill={'#696969'}></SearchSVG>
                </span>
                <input id='search' type="text" placeholder='Search' onChange={extractSearchValue} />
                <button onClick={()=>send()}>click</button>
            </div>
        </>
    )
}

export default SearchInput