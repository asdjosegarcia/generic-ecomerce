import React from 'react'
import ToggleOffSVG from '../SVG/ToggleOffSVG'
import ToggleOnSVG from '../SVG/ToggleOnSVG'
import './FilterMenu.css'


const FilterMenu = () => {
  const filterCliked=(clickValue)=>{
    console.log(clickValue)
  }


  return (
    <div className='filter-menu-container'>
      <button className='toggle-button' onClick={()=>filterCliked('free-shipment')}>
        <p>Free Shipping ㅤㅤㅤㅤ</p>
        <ToggleOffSVG width={'48px'} fill={'#696969'}></ToggleOffSVG>
        {/* <ToggleOnSVG></ToggleOnSVG> */}
      </button>
      <button className='toggle-button' onClick={()=>filterCliked('New')}>
        <p>New ㅤㅤㅤㅤ</p>
        <ToggleOffSVG width={'48px'} fill={'#696969'}></ToggleOffSVG>
        {/* <ToggleOnSVG></ToggleOnSVG> */}
      </button>
      <button className='toggle-button'onClick={()=>filterCliked('official')}> 
        <p>Official Stores ㅤㅤㅤㅤ</p>
        <ToggleOffSVG width={'48px'} fill={'#696969'}></ToggleOffSVG>
        {/* <ToggleOnSVG></ToggleOnSVG> */}
      </button>

    </div>
  )
}

export default FilterMenu