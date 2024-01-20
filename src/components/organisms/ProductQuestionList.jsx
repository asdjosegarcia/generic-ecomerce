import React from 'react'
import './ProductQuestionList.css'
import QuestionCard from '@/components/molecules/QuestionCard'

const PorductQuestionList = ({ product }) => {
    // console.log(product)
  return (
    <div className='questions--list__container'>
      <h4 className='questions--list__title'>Questions</h4>
      {product?.ProductComplete.question.map((question,index)=><QuestionCard question={question}key={index}></QuestionCard>)}
        {/* <QuestionCard   product={product}></QuestionCard> */}

    </div>
  )
}

export default PorductQuestionList