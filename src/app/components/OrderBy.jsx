'use client'
import './OrderBy.css'
import React, { useContext } from "react";
import { variableContext } from "../context/contexto";


const OrderBy = () => {
  const contexto = useContext(variableContext)
  // console.log(contexto)

  const handleOrderChange = (event) => {
    const option = event.target.value
    contexto.setOrderBy(option)
    // fetch(`/api/products/order-by/${option}`)//realizamos una peticion get a parametro de la url.id
    // .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
    // .then(data => {
    //   console.log(data)
    // })
  }



  return (
    <div className='order-by__container'>
      <label htmlFor="order" >Order by:</label>
      <select id="order" name="order" onChange={handleOrderChange}>
        <option value="">Default</option>
        <option value="low-price">Low price</option>
        <option value="high-price">High price</option>
        <option value="most-relevant">Most relevant</option>
      </select>
    </div>
  )
}

export default OrderBy


// import React, { useState } from 'react';

// const TuComponente = () => {
//   const [selectedOrder, setSelectedOrder] = useState('');

//   const handleOrderChange = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedOrder(selectedValue);

//     // Llama a tu función con el valor seleccionado
//     tuFuncionEspecifica(selectedValue);
//   };


//   return (
//     <div>
//       <label htmlFor="order">Order by:</label>
//       <select id="order" name="order" onChange={handleOrderChange} value={selectedOrder}>
//         <option value="lowPrice">Low price</option>
//         <option value="highPrice">High price</option>
//         <option value="mostRelevant">Most relevant</option>
//       </select>
//     </div>
//   );
// };

// export default TuComponente;
