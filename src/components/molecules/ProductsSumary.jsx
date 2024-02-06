import React, { useContext } from 'react'
import './ProductsSumary.css'
import MainButton from '../atoms/MainButton'
import { variableContext } from "@/context/contexto";


const ProductsSumary = (props) => {
    const contexto = useContext(variableContext)
    contexto.getProductsPrices
    // console.log(props.products)

    function reduce1() {//reduce suma los numeros entragando un solo valor como resultado
        const arr1 = [0, 1, 2, 3, 4]
        const suma = arr1.reduce((valorAcumulado, valorASumar) => {//se le agrega una funcion dentro con 2 parametros, 
            return valorAcumulado + valorASumar//valorAcumulado va a tener la suma de los numeros ya sumados, valorASumar los nuevos numeros a sumar
        })
        // console.log(suma);//resultado
    }
    // reduce1()
    return (
        <div className='product-summary__container ProductsSumary'>
            <p className='product-summary__titile'>Summary</p>
            <p className='product-summary__products'>Products</p>
            <p className='product-summary__totla-products'>$500</p>
            <p className='product-summary__shippment'>Shippment</p>
            <p className='product-summary__total-shippment'>$300</p>
            <p className='product-summary__total'>Total</p>
            <p className='product-summary__total-total'>$100</p>
            <MainButton text={`Buy (9)`} />
            {/* <button className='product-summary__pay-button'>Buy(9)</button> */}

        </div>

    )
}

export default ProductsSumary