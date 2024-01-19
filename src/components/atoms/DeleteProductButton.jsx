import React,{useContext} from 'react'
import './DeleteProductButton.css'
import DeleteSVG from '@/SVG/DeleteSVG'
import { variableContext } from "@/context/contexto";
import { useSession } from 'next-auth/react';



const DeleteProductButton = ({link,productId,userId,size}) => {
  const contexto = useContext(variableContext)
  const { data: session } = useSession();//cargamos datos del usuario en session   

  

  const deleteFromCart= async()=>{
    
    const res = await fetch(`${link}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email:session?.user.email,
        productId:productId,  
      }),
    });
    if(res.ok){
      contexto.setNotificationText('Deleted')
    }else{
      contexto.setNotificationText('Error')
    }

  }
  
  return (
    <button onClick={()=>deleteFromCart()} className="button-delete">
      <DeleteSVG height={'24px'} fill={'#696969'} ></DeleteSVG>
    </button>
  )
}

export default DeleteProductButton