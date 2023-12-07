import React from 'react'
import './SearchInput.css'
import SearchSVG from '../SVG/SearchSVG'

const SearchInput = () => {
    return (
        <>
            <div className='input__container'>
                <span className='input__icon'>
                    <SearchSVG width={'40px'} height={'40px'} fill={'#696969'}></SearchSVG>
                </span>
                <input type="text" />
            </div>
        </>
    )
}

export default SearchInput