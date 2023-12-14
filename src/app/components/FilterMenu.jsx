import React, { useContext, useState } from 'react'
import ToggleOffSVG from '../SVG/ToggleOffSVG'
import ToggleOnSVG from '../SVG/ToggleOnSVG'
import './FilterMenu.css'
import { variableContext } from "../context/contexto";

let paramsUrl = ''
const isActive = {
  freeShipping: false,
  new: false
}

const FilterMenu = () => {

  // const [getParamsUrl, setParamsUrl] = useState()
  const contexto = useContext(variableContext)

  const filterCliked = (clickValue) => {
    isActive[clickValue]=!isActive[clickValue]
    const onlyTrue = Object.keys(isActive).filter(propiedad => isActive[propiedad] === true);
    //Objet.keys convierte las propiedades en array, filter recorre el arrray y filtra las propiedades que sean true
    paramsUrl=onlyTrue.join('')//eliminamos las '' de array convirtiendolo asi en una cadena de texto
    // console.log(paramsUrl)
    contexto.setProductListURL(`/api/products/filter-by/${paramsUrl}''`) //las commilas del final se agregan para evitar un error en la peticion
  }


  return (
    <div className='filter-menu-container'>
      <button className='toggle-button' onClick={() => filterCliked('freeShipping')}>
        <p>Free Shipping ㅤㅤㅤㅤ</p>
        {isActive.freeShipping ? <ToggleOnSVG width={'48px'} fill={'#008000'}></ToggleOnSVG> : <ToggleOffSVG width={'48px'} fill={'#696969'}></ToggleOffSVG>}

        {/* <ToggleOnSVG></ToggleOnSVG> */}
      </button>
      <button className='toggle-button' onClick={() => filterCliked('new')}>
        <p>New ㅤㅤㅤㅤ</p>
        {isActive.new ? <ToggleOnSVG width={'48px'} fill={'#008000'}></ToggleOnSVG> : <ToggleOffSVG width={'48px'} fill={'#696969'}></ToggleOffSVG>}
      </button>
      <button className='toggle-button' onClick={() => filterCliked('official')}>
        <p>Official Stores ㅤㅤㅤㅤ</p>
        <ToggleOffSVG width={'48px'} fill={'#696969'}></ToggleOffSVG>
        {/* <ToggleOnSVG></ToggleOnSVG> */}
      </button>

    </div>
  )
}

export default FilterMenu