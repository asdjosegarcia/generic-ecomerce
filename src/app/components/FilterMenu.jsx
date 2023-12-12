import React from 'react'
import ToggleOffSVG from '../SVG/ToggleOffSVG'
import ToggleOnSVG from '../SVG/ToggleOnSVG'
import './FilterMenu.css'


const FilterMenu = () => {

  return (
    <div className='filter-menu-container'>
      <button className='toggle-button'>
        <p>Free Shiping ㅤㅤㅤㅤ</p>
        <ToggleOffSVG width={'48px'} fill={'#696969'}></ToggleOffSVG>
        {/* <ToggleOnSVG></ToggleOnSVG> */}
      </button>
      <button className='toggle-button'>
        <p>New ㅤㅤㅤㅤ</p>
        <ToggleOffSVG width={'48px'} fill={'#696969'}></ToggleOffSVG>
        {/* <ToggleOnSVG></ToggleOnSVG> */}
      </button>
      <button className='toggle-button'> 
        <p>Official Stores ㅤㅤㅤㅤ</p>
        <ToggleOffSVG width={'48px'} fill={'#696969'}></ToggleOffSVG>
        {/* <ToggleOnSVG></ToggleOnSVG> */}
      </button>

    </div>
  )
}

export default FilterMenu