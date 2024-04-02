import React,{useContext} from 'react'
import { variableContext } from "@/context/contexto";
import './CircleImgList.css'


const CircleImgList = (props) => {
  const contexto = useContext(variableContext)
    // console.log(props.products);

  const image=(product)=>{
    let imageSrc;
    // console.log(product);
    if(product.previewImg==""){
      imageSrc= contexto.bytesToBase(product.previewImgBase.data.data,product.previewImgBase.mimetype)
    }else{
      imageSrc=product.previewImg
    }
    return imageSrc
  }
  
  return (
    <div className='CircleImgList'>
        {props.products.map((product,index)=>(
          <div key={index}>
          <img src={image(product)} />
          </div>
        ))}
    </div>
  )
}

export default CircleImgList
