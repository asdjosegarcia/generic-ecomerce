import React,{useContext} from 'react'
import "./UserProductCard.css"
import BadgetStars from './BadgetStars';
import BadgetFreeShipping from '../atoms/BadgetFreeShipping';
import ProductCard from '@/components/molecules/ProductCard';
import MainButton from '../atoms/MainButton';
import MainDeleteButton from '../atoms/MainDeleteButton';
import EditSVG from '@/SVG/EditSVG';
import DeleteSVG from '@/SVG/DeleteSVG';
import { variableContext } from "@/context/contexto";



const UserProductCard = (props) => {
  const contexto = useContext(variableContext)


    const deleteProduct=async()=>{
      // console.log(props.userEmail)
      // console.log(props.product.id)
      const res = await fetch(`/api/products/completeproducts`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({productId:props.product.id}),
      });
      // const data = await res.json();
      if(res.ok){
      contexto.setNotificationText('Deleted')
      }else{
      contexto.setNotificationText('Error')
      }
      props.setReload(!props.getRealod)
    }

    return (
        <div className='UserProductCard user-product-card__container'>
          <ProductCard product={props.product} ></ProductCard>
          <div className='user-product-card__buttons-container'>
            <MainDeleteButton funct={deleteProduct} text={"Delete"} icon={<DeleteSVG></DeleteSVG>}></MainDeleteButton>
            <MainButton funct={()=>{console.log('hola')}} text={"Edit"} icon={<EditSVG></EditSVG>}></MainButton>
          </div>
        </div>
    )
}

export default UserProductCard