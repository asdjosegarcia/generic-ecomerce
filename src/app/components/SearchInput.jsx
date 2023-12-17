'use client'
import React, { useContext } from 'react'
import './SearchInput.css'
import SearchSVG from '../SVG/SearchSVG'
import { variableContext } from "../context/contexto";



let searchValue
const SearchInput = () => {
    const contexto = useContext(variableContext)
    // console.log('contexto',contexto.urlParams.search+"hola") 

    const send = (event) => {
        event.preventDefault();
        contexto.setUrlParams({ ...contexto.getUrlParams, search: 'search=' + searchValue })


    }
    return (
        <>
            <form onSubmit={send}>
                <div className='input__container'>
                    <span className='input__icon'>
                        <SearchSVG width={'40px'} height={'40px'} fill={'#696969'}></SearchSVG>
                    </span>
                    <input /* id='search' */ type="text" placeholder='Search' onChange={(e)=>{searchValue=e.target.value}} />
                    {/* <button type="submit" onClick={() => send()}>click</button> */}
                </div>
            </form>
        </>
    )
}

export default SearchInput