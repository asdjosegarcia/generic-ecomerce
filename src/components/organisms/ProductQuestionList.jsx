import React, { useState } from 'react'
import './ProductQuestionList.css'
import QuestionCard from '@/components/molecules/QuestionCard'
import QuestionInput from '../molecules/QuestionInput'
import QuestionViewMore from '../molecules/QuestionViewMore'


let questions;
const PorductQuestionList = ({ product }) => {
  const [getViewMore, setViewMore] = useState(false);
  const reversedQuestions=[...product?.ProductComplete.question].reverse() //creamos un nuevo array on orden invertido

  if ((reversedQuestions.length > 3) && getViewMore === false) {//si las questions son mas de 3..
    questions = reversedQuestions.slice(0, 3) //extraemos los questions del 0 al 3
    questions = questions.map((question, index) => <QuestionCard question={question} key={index}></QuestionCard>)//componente a renderizar
  } else {
    questions = reversedQuestions
    questions = questions.map((question, index) => <QuestionCard question={question} key={index}></QuestionCard>)
  }


  return (
    <div className='questions--list__container'>
      <h4 className='questions--list__title'>Questions</h4>
      <QuestionInput porduct={product}></QuestionInput>
      {(reversedQuestions.length > 0) ? (//si no hay preguntas
        <>
          {questions}{/* preguntas que renderizamos */}
          <QuestionViewMore setViewMore={setViewMore} getViewMore={getViewMore} ></QuestionViewMore>{/* boton ver mas */}
        </>
      ) :
        <p> Nobody has asked yet, be the first! 😁</p>//si no hay preguntas renderixamos estos
      }
    </div>
  )
}

export default PorductQuestionList