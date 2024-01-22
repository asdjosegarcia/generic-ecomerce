import React, { useState } from 'react'
import './ProductQuestionList.css'
import QuestionCard from '@/components/molecules/QuestionCard'
import QuestionInput from '../molecules/QuestionInput'
import QuestionViewMore from '../molecules/QuestionViewMore'


let viewMore;
let questions;
const PorductQuestionList = ({ product }) => {
  const [getViewMore, setViewMore] = useState(false);

  if ((product?.ProductComplete.question.length > 3) && getViewMore === false) {//si las questions son mas de 3..
    questions = product?.ProductComplete.question.slice(0, 3) //extraemos los questions del 0 al 3
    questions = questions.map((question, index) => <QuestionCard question={question} key={index}></QuestionCard>)
  } else {
    questions = product?.ProductComplete.question
    questions = questions.map((question, index) => <QuestionCard question={question} key={index}></QuestionCard>)
  }


  return (
    <div className='questions--list__container'>
      <h4 className='questions--list__title'>Questions</h4>
      <QuestionInput porduct={product}></QuestionInput>
      {(product?.ProductComplete.question.length > 0) ? (//si tenemos algun comentario
        <>
          {questions}
          <QuestionViewMore setViewMore={setViewMore} getViewMore={getViewMore} ></QuestionViewMore>
        </>
      ) :
        <p> Nobody has asked yet, be the first! 😁</p>
      }
    </div>
  )
}

export default PorductQuestionList