import React,{useContext} from 'react'
import './DeleteProductButton.css'
import DeleteSVG from '@/SVG/DeleteSVG'
import { variableContext } from "@/context/contexto";


const DeleteProductButton = ({link,productId,userId,size}) => {
  const contexto = useContext(variableContext)
  

  const deleteFromCart= async()=>{
/*     const res = await fetch(`${link}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId:contexto.userData.id,
        productId:productId,  
      }),
    });
    console.log(res.json())
    // console.log('delete'+link+productId)
    if(res.ok){
      contexto.setNotificationText('Eliminado')
      
    } */
    contexto.setNotificationText('Eliminado')

  }
  
  return (
    <button onClick={()=>deleteFromCart()}>
      <DeleteSVG height={'24px'} fill={'#696969'} ></DeleteSVG>
    </button>
  )
}

export default DeleteProductButton