import React,{useContext} from 'react'
import './QuestionCardMenu.css'
import { variableContext } from "@/context/contexto";



const QuestionCardMenu = () => {
    const contexto = useContext(variableContext)

  return (
    <div className='question-card-menu__container'>
        <span onClick={()=>{contexto.setNotificationText('Reported')}} className='question-card-menu__report-comment'>Report Comment</span>
        <span onClick={()=>{contexto.setNotificationText('Reported')}} className='question-card-menu__report-comment'>Report Response</span>
    </div>

  )
}

export default QuestionCardMenu