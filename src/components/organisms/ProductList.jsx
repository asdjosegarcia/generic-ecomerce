'use client'
import React, { useState, useEffect } from 'react'
// import FavoritesList from './FavoritesList'
import ProductCard from '../molecules/ProductCard'
import './ProductList.css'

const ProductList = (props) => {
    const [getProducts, setProducts] = useState(null)

    useEffect(() => {
        if (props?.link && getProducts == null) {//si getProduct ya tiiene los productos evitamoshacer otra recarga
            fetch(props.link)//realizamos una peticion get a parametro de la url.id
                .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
                .then(data => {
                    setProducts(data[0].products)
                })
        }
    }, [props.link])
    return (
        <div className='product-list__container ProductList '>
            <p className='product-list__title'>{props.title}</p>
            <div className='product-list__cards-container'>
                {getProducts &&
                    getProducts?.map((product, index) => (<ProductCard product={product} key={product.id} disableFavorite={true} />))
                }
            </div>
        </div>

    )
}

export default ProductList 