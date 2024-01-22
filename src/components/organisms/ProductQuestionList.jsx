import React from 'react'
import './ProductQuestionList.css'
import QuestionCard from '@/components/molecules/QuestionCard'
import QuestionInput from '../molecules/QuestionInput'

const PorductQuestionList = ({ product }) => {
    // console.log(product?.ProductComplete.question.length)
  return (
    <div className='questions--list__container'>
      <h4 className='questions--list__title'>Questions</h4>
      <QuestionInput porduct={product}></QuestionInput>
      {(product?.ProductComplete.question.length>0)?//si tenemos algun comentario
      <>
      {product?.ProductComplete.question.map((question,index)=><QuestionCard question={question}key={index}></QuestionCard>)}
      </>
      :
      <p> Nobody has asked yet, be the first! 😁</p>
      }
        {/* <QuestionCard   product={product}></QuestionCard> */}
    </div>
  )
}

export default PorductQuestionList