import React,{useState} from 'react'
import ProductCard from './ProductCard'
import ShipmentProgressBar from '../organisms/ShipmentProgressBar'
import ButtonViewMore from '../atoms/ButtonViewMore'
import './UserPurchasedCard.css'
import UserPurchasedMore from './UserPurchasedMore'


const UserPurchasedCard = (props) => {
  const [getMore,setMore]=useState(false)

  ////////////////edited objecto product
    const editedProdcut={//editamos el objeto para no tener que hacer un porductCard nuevo, o editarlo, ya que este esta en toda la app y seria delicado editarlo
      ...props.product,
      orderId:props.product.id, //numero de compra
      id:props.product.originalId, //id del prodcuto original
      previewImgBase:{ //imagen de preview
        data:{
          data:props.product.previewImgBase.data,
          // type: "Buffer",
        },
        mimetype:props.product.previewImgMimetype
      },
      
    }


    ////////////More info about the product 
    const viewMore=()=>{
      setMore(!getMore)
    }


    
  return (
    <div className='UserPurchasedCard'>
        <ProductCard product={editedProdcut} disableFavorite={true}/*  img64={} */></ProductCard>
        <ShipmentProgressBar progress={props.progress} ></ShipmentProgressBar>
        {getMore && <UserPurchasedMore product={editedProdcut}></UserPurchasedMore> }
        <ButtonViewMore function={viewMore} status={getMore} ></ButtonViewMore>
        
    </div>
  )
}

export default UserPurchasedCard