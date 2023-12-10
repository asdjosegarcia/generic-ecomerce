import React from 'react'
import FilterSVG from '../SVG/FilterSVG'
import './FilterBy.css'

const FilterBy = () => {
  return (
    <button className='filter-button-container'>
        <FilterSVG width={'20px'}  height={'20px'} fill={'#696969'}></FilterSVG>
        <p>Filter</p>
        
    </button>
  )
}

export default FilterBy