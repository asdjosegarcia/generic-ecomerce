import React from 'react'
import CartCard from '@/components/molecules/CartCard'

const CartList = ({products}) => {
    return (
        <div>
            {products.map((product,index)=>(
                <CartCard  key={index} product={product} index={index}></CartCard>
            ))}
        </div>
    )
}

export default CartList