import React, { useState,useContext,useEffect } from 'react'
import './ProductQuestionList.css'
import QuestionCard from '@/components/molecules/QuestionCard'
import QuestionInput from '../molecules/QuestionInput'
import QuestionViewMore from '../molecules/QuestionViewMore'
import { variableContext } from "@/context/contexto";
// import { useEffect } from 'react/cjs/react.production.min'



let questions;
const PorductQuestionList = ({ product }) => {
  const contexto = useContext(variableContext)
  const [getViewMore, setViewMore] = useState(false);
  
  const [getReversedQuestions,setReversedQuestions]=useState([...product?.ProductComplete?.question].reverse())//cargamos los productos con el orden invertido
  // console.log(contexto.getNewQuestion)
  useEffect(() => {
    if(contexto.getNewQuestion !== undefined){//si no es undefined (por que sino da error)
      setReversedQuestions([contexto.getNewQuestion,...getReversedQuestions])//cargamos la nueva pregunta para no hacer una llamada inecesaria a la DB
    }
  }, [contexto.getNewQuestion])

  if ((getReversedQuestions.length > 3) && getViewMore === false) {//si las questions son mas de 3..
    questions = getReversedQuestions.slice(0, 3) //extraemos los questions del 0 al 3
    questions = questions.map((question, index) => <QuestionCard question={question} key={index}></QuestionCard>)//componente con 3 question a renderizar
  } else { 
    // console.log('completo')
    questions = getReversedQuestions
    questions = questions.map((question, index) => <QuestionCard question={question} key={index}></QuestionCard>)//componente con todas las questions
  }

  return (
    <div className='questions--list__container'>
      <h4 className='questions--list__title'>Questions</h4>
      <QuestionInput porduct={product}></QuestionInput>
      {(getReversedQuestions.length > 0) ? (//si no hay preguntas
        <>
          {questions}{/* preguntas que renderizamos */}
          {(getReversedQuestions.length>3)?  (<QuestionViewMore setViewMore={setViewMore} getViewMore={getViewMore} ></QuestionViewMore>): (<></>)} {/* boton ver mas, solo aparece si hay mas de 3 questions */}
         
        </>
      ) :
        <p> Nobody has asked yet, be the first! 😁</p>//si no hay preguntas renderizamos esto
      }
    </div>
  )
}

export default PorductQuestionList