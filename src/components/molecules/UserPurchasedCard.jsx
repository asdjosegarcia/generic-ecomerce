import React from 'react'
import ProductCard from './ProductCard'
import ShipmentProgressBar from '../organisms/ShipmentProgressBar'
import ButtonViewMore from '../atoms/ButtonViewMore'
import './UserPurchasedCard.css'

const UserPurchasedCard = (props) => {
    const editedProdcut={
      ...props.product,
      id:props.product.originalId,
      previewImgBase:{
        data:{
          data:props.product.previewImgBase.data,
          // type: "Buffer",
        },
        mimetype:props.product.previewImgMimetype
      },
      // previewImgBase:{mimetype:props.product.previewImgMimetype}
    }
    // console.log('edited',editedProdcut) 
    // console.log(props.product)
  return (
    <div className='UserPurchasedCard'>
        <ProductCard product={editedProdcut} disableFavorite={true}/*  img64={} */></ProductCard>
        <ShipmentProgressBar ></ShipmentProgressBar>
        <ButtonViewMore></ButtonViewMore>
    </div>
  )
}

export default UserPurchasedCard