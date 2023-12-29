import React from 'react'
import './PorductQuestionList.css'
import QuestionCard from '@/components/QuestionCard'

const PorductQuestionList = ({ product }) => {
    // console.log(product)
  return (
    <div className='questions--list__container'>
        <QuestionCard product={product}></QuestionCard>

    </div>
  )
}

export default PorductQuestionList