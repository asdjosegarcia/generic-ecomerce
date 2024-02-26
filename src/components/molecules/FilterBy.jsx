'use client'
import React, { useState } from 'react'
import FilterSVG from '@/SVG/FilterSVG'
import './FilterBy.css'
import FilterMenu from "@/components/atoms/FilterMenu";


const FilterBy = () => {
  const [getClicked,setClicked]=useState(false)
  const FilterCliked=()=>{
    // console.log('click')
    setClicked(!getClicked)
  }
  return (
    <>
    <button className='filter-button-container' onClick={()=>FilterCliked()}>
      <FilterSVG width={'20px'} height={'20px'} fill={'#696969'}></FilterSVG>
      <p>Filter</p>
    </button>
      {getClicked?<FilterMenu></FilterMenu>:''}
    </>
  )
}

export default FilterBy