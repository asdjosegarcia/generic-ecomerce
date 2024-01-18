import React,{useContext} from 'react'
import './DeleteProductButton.css'
import DeleteSVG from '@/SVG/DeleteSVG'
import { variableContext } from "@/context/contexto";


const DeleteProductButton = ({link,productId,userId,size}) => {
  const contexto = useContext(variableContext)
  

  const deleteFromCart= async()=>{
    const res = await fetch(`${link}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId:contexto.getUserData.id,
        productId:productId,  
      }),
    });
    if(res.ok){
      contexto.setNotificationText('Deleted')
    }else{
      contexto.setNotificationText('Error')
    }
    // console.log( 'link'+link)
    // console.log('porductId'+productId)
    console.log('userId',contexto.getUserData.id)
      // contexto.setNotificationText('Deleted')


    // link=null;
    // productId=null;

  }
  
  return (
    <button onClick={()=>deleteFromCart()}>
      <DeleteSVG height={'24px'} fill={'#696969'} ></DeleteSVG>
    </button>
  )
}

export default DeleteProductButton