import React, { useContext,useEffect,useState} from 'react'
import './ProductsSumary.css'
import MainButton from '../atoms/MainButton'
import { variableContext } from "@/context/contexto";
import Link from 'next/link';

// let allProductsPrice = 0;
// let allProductsShipment = 0;
// let total = 0;
let quantityOfProducts = 0
let totalShipmentPrice=0
let totalProductsPrice=0

const ProductsSumary = (props) => {
    const contexto = useContext(variableContext)
    const [getTotalProductPrice,setTotalProductsPrice]=useState(0)
    const [getTotalShipmentPrice,setTotalShipmentPrice]=useState(0)
    // console.log(props.products);

    /////////////////calcular suma de los precios de prodcutos, envios y cantidad
    //useEffect(() => {}, [contexto.getCart])//este useEfect esta solo para re-renderizar, parece que no tiene utilidad pero si tiene
    totalProductsPrice=contexto.getCart.products.reduce((accumulator,product)=>{//suma del precio de todos los productos
        return accumulator+(product.price*product.cartProductQuantities[0].quantity)
    },0)
    totalShipmentPrice=contexto.getCart.products.reduce((accumulator,product)=>{//suma del precio de todos los envios
        return accumulator+(product.shipment*product.cartProductQuantities[0].quantity)
    },0)
    quantityOfProducts=contexto.getCart.products.reduce((accumulator,product)=>{//cantidad de prodcutos
        return accumulator+(1*product.cartProductQuantities[0].quantity)
    },0)
    
    
    return (
        <div className='product-summary__container ProductsSumary'>
            <p className='product-summary__titile'>Summary</p>
            <p className='product-summary__products'>Products</p>
            <p className='product-summary__total-products'>${totalProductsPrice}</p>
            <p className='product-summary__shippment'>Shippment</p>
            <p className='product-summary__total-shippment'>${totalShipmentPrice}</p>
            <p className='product-summary__total'>Total</p>
            <p className='product-summary__total-total'>${totalProductsPrice+totalShipmentPrice}</p>
            <Link href={'/product/buy'}>
                <MainButton text={`Buy (${quantityOfProducts})`} />
            </Link>
            {/* <button className='product-summary__pay-button'>Buy(9)</button> */}

        </div>

    )
}

export default ProductsSumary