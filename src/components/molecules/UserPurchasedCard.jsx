import React,{useState} from 'react'
import ProductCard from './ProductCard'
import ShipmentProgressBar from '../organisms/ShipmentProgressBar'
import ButtonViewMore from '../atoms/ButtonViewMore'
import './UserPurchasedCard.css'
import UserPurchasedMore from './UserPurchasedMore'

const UserPurchasedCard = (props) => {
  const [getMore,setMore]=useState(false)

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
    // console.log(getMore)
    const viewMore=()=>{
      setMore(!getMore)

    }
  return (
    <div className='UserPurchasedCard'>
        <ProductCard product={editedProdcut} disableFavorite={true}/*  img64={} */></ProductCard>
        <ShipmentProgressBar ></ShipmentProgressBar>
        {getMore && <UserPurchasedMore></UserPurchasedMore> }
        <ButtonViewMore function={viewMore} status={getMore} ></ButtonViewMore>
        
    </div>
  )
}

export default UserPurchasedCard