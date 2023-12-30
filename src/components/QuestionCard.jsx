import React from 'react'
import LikeSVG from '@/SVG/LikeSVG'
import DislikeSVG from '@/SVG/DislikeSVG'

const QuestionCard = ({ product }) => {
    console.log(product?.ProductComplete.question)
    return (
        <div className='question--card__container'>
            {/* <img src="" alt="" />  para el dia que cree cuentas*/}
            {/* <p className='question'>{product?.ProductComplete.question}</p> */}
            <img src="" alt="" className='question--card__user-perfile-img' />
            <LikeSVG height={'24'}  fill={'#3483fa'} /* filled={'#3483fa'} */></LikeSVG>
            <DislikeSVG height={'24'}  fill={'#3483fa'} /* filled={'#3483fa'} */></DislikeSVG>


        </div>
    )
}

export default QuestionCard