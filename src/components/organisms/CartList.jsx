import React from 'react'
import CartCard from '@/components/molecules/CartCard'

const CartList = ({products}) => {
    // console.log(products)
    return (
        <div>
            {products.map((product,index)=>(
                // console.log(product);
                <CartCard  key={index} product={product}></CartCard>
            ))}
        </div>
    )
}

export default CartList