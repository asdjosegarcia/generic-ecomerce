'use client'
import './OrderBy.css'
import React, { useContext } from "react";
import { variableContext } from "../../context/contexto";


const OrderBy = () => {
  const contexto = useContext(variableContext)
  // console.log(contexto)

  const handleOrderChange = (event) => {
    const option = event.target.value
    contexto.setUrlParams({...contexto.getUrlParams,orderBy:option})/* .orderBy= */
    // if(option==""){
    //   contexto.setProductListURL("")
    // }else{
    //   contexto.setProductListURL(`/api/products/order-by/${option}`)
    // }
  }



  return (
    <div className='order-by__container'>
      <label htmlFor="order" >Order by:</label>
      <select id="order" name="order" onChange={handleOrderChange}>
        {/* <option value="">Default</option> */}
        <option value="most-relevant">Most relevant</option>
        <option className='option' value="low-price">Low price</option>
        <option value="high-price">High price</option>
      </select>
    </div>
  )
}

export default OrderBy


