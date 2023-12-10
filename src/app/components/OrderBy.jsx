'use client'
import React from 'react'
import './OrderBy.css'
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// async function loadProducts() {//extraemos los productos de la base de datos
//     const products = await prisma.product.findMany() //buscamos todos los productos de la DB

//     return products
//   }

const OrderBy = () => {
      const handleOrderChange=(event)=>{
        const option=event.target.value
      }
    
    return (
        <div className='order-by__container'>
            <label htmlFor="order" >Order by:</label>
            <select id="order" name="order" onChange={handleOrderChange }>
                <option value="lowPrice">Low price</option>
                <option value="highPrice">High price</option>
                <option value="mostRelevant">Most relevant</option>
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
