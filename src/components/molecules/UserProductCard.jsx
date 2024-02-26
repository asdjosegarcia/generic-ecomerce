import React from 'react'
import "./UserProductCard.css"
import BadgetStars from './BadgetStars';
import BadgetFreeShipping from '../atoms/BadgetFreeShipping';
import ProductCard from '@/components/molecules/ProductCard';
import MainButton from '../atoms/MainButton';
import MainDeleteButton from '../atoms/MainDeleteButton';
import EditSVG from '@/SVG/EditSVG';
import DeleteSVG from '@/SVG/DeleteSVG';


const UserProductCard = (props) => {
    console.log(props.product)
    const deleteProduct=async()=>{
      const res = await fetch(`/api/user/products`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userEmail:props.userEmail}),
      });
      const data = await res.json();
      setProducts(await data)
      // console.log(getProducts)
    }

    return (
        <div className='UserProductCard user-product-card__container'>
          <ProductCard product={props.product} ></ProductCard>
          <div className='user-product-card__buttons-container'>
            <MainDeleteButton funct={()=>{console.log('hola')}} text={"Delete"} icon={<DeleteSVG></DeleteSVG>}></MainDeleteButton>
            <MainButton funct={()=>{console.log('hola')}} text={"Edit"} icon={<EditSVG></EditSVG>}></MainButton>
          </div>
        </div>
    )
}

export default UserProductCard