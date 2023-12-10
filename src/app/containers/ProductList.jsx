import React from 'react'
import './ProductList.css'
import { PrismaClient } from '@prisma/client'
import ProductCard from '../components/ProductCard'
const prisma = new PrismaClient()

async function loadProducts() {//extraemos los productos de la base de datos
  const products = await prisma.product.findMany() //buscamos todos los productos de la DB
  return products
}

const ProductList =async () => {
const productList = await loadProducts() //llamamos a la funcion que carga los productos y los almacenamos en productList
  // console.log(productList)



  return (

    
    <div className='product-list__container'>
      {productList.map((product,index)=>(<ProductCard key={index} product={product}></ProductCard>))}

      {/* {tasks.map(task => ( <TaskCard task={task}></TaskCard>))} */}
    {/* <ProductCard></ProductCard> */}

    </div>
  )
}

export default ProductList