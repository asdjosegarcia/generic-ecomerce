import React from 'react'

const QuestionCard = ({ product }) => {
    console.log(product)
  return (
    <div className='question--card__container'>
        {/* <img src="" alt="" />  para el dia que cree cuentas*/}
        {/* <p className='question'>{product.question.question}</p> */}
        <span>Like</span>
        <span>Dislike</span>

    </div>
  )
}

export default QuestionCard