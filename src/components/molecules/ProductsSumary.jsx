import React, { useContext } from 'react'
import './ProductsSumary.css'
import MainButton from '../atoms/MainButton'
import { variableContext } from "@/context/contexto";

let allProductsPrice=0;
let allProductsShipment=0;
let total=0;
let quantityOfProducts=0
const ProductsSumary = (props) => {
    const contexto = useContext(variableContext)


    if(Object.keys(contexto.getProductsPrices).length &&  Object.keys(contexto.getProductsShippment).length){
        allProductsPrice=Object.values(contexto.getProductsPrices)//tansforma el objeto en array para poder sumarlos
        // console.log(allProductsPrice);
        allProductsPrice=(allProductsPrice.reduce((a,b)=>{ return a+b})).toFixed(2) 
        //esto no es recomendable en un sistema con dinero real por obvias razones
        
        
        allProductsShipment=Object.values(contexto.getProductsShippment)
        allProductsShipment=(allProductsShipment.reduce((a,b)=>{ return a+b})).toFixed(2)
        
        total=(Number(allProductsPrice)+Number(allProductsShipment)).toFixed(2)
        
    }
    // console.log(contexto.getProductsPrices);
    // quantityOfProducts=allProductsPrice.length



    // function reduce1() {//reduce suma los numeros entragando un solo valor como resultado
    //     const arr1 = [0, 1, 2, 3, 4]
    //     const suma = arr1.reduce((valorAcumulado, valorASumar) => {//se le agrega una funcion dentro con 2 parametros, 
    //         return valorAcumulado + valorASumar//valorAcumulado va a tener la suma de los numeros ya sumados, valorASumar los nuevos numeros a sumar
    //     })
    //     // console.log(suma);//resultado
    // }
    // reduce1()
    return (
        <div className='product-summary__container ProductsSumary'>
            <p className='product-summary__titile'>Summary</p>
            <p className='product-summary__products'>Products</p>
            <p className='product-summary__total-products'>${allProductsPrice}</p>
            <p className='product-summary__shippment'>Shippment</p>
            <p className='product-summary__total-shippment'>${allProductsShipment}</p>
            <p className='product-summary__total'>Total</p>
            <p className='product-summary__total-total'>${total}</p>
            <MainButton text={`Buy (${contexto.getCart.porductsQuantity})`} />
            {/* <button className='product-summary__pay-button'>Buy(9)</button> */}

        </div>

    )
}

export default ProductsSumary