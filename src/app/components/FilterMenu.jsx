import React,{useContext,useState} from 'react'
import ToggleOffSVG from '../SVG/ToggleOffSVG'
import ToggleOnSVG from '../SVG/ToggleOnSVG'
import './FilterMenu.css'
import { variableContext } from "../context/contexto";


const FilterMenu = () => {
  const [getIsActive,setIsActive]=useState(
    {
      freeShipping:false,
      new:false,
    }
  )
  const contexto = useContext(variableContext)

  const filterCliked=(clickValue)=>{
    contexto.setProductListURL(`/api/products/filter-by/${clickValue}`)
    setIsActive({...getIsActive,[clickValue]:!getIsActive[clickValue]})
    // console.log(getIsActive)
      
  }


  return (
    <div className='filter-menu-container'>
      <button className='toggle-button' onClick={()=>filterCliked('freeShipping')}>
        <p>Free Shipping ㅤㅤㅤㅤ</p>
        {getIsActive.freeShipping?<ToggleOnSVG width={'48px'} fill={'#008000'}></ToggleOnSVG>:<ToggleOffSVG width={'48px'} fill={'#696969'}></ToggleOffSVG>}
        
        {/* <ToggleOnSVG></ToggleOnSVG> */}
      </button>
      <button className='toggle-button' onClick={()=>filterCliked('new')}>
        <p>New ㅤㅤㅤㅤ</p>
        {getIsActive.new?<ToggleOnSVG width={'48px'} fill={'#008000'}></ToggleOnSVG>:<ToggleOffSVG width={'48px'} fill={'#696969'}></ToggleOffSVG>}
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