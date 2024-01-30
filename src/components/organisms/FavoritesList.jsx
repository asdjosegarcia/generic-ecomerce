import React from 'react'
import ProductCard from '../molecules/ProductCard'

const FavoritesList = ({products}) => {
// console.log(products)
  return (
    <div>
        {products.map((product, index) => (<ProductCard key={index} product={product} favorite={true}></ProductCard>))}
    </div>
  )
}

export default FavoritesList