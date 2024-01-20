import React from 'react'
import LikeSVG from '@/SVG/LikeSVG'
import DislikeSVG from '@/SVG/DislikeSVG'
import './QuestionCard.css'

const QuestionCard = (props) => {
    console.log(props?.question)
    return (
        <div className='question--card__container'>
            {/* <p className=''>Questions</p> */}
            {/* <img src={props?.question.img} alt="" />  para el dia que cree cuentas */}
            {/* <p className='question'>{product?.ProductComplete.question}</p> */}
            <img src="" alt="" className='question--card__user-perfile-img' />
            <p>{props?.question.question}</p>
            <div className='question--card__like-dislike-container'>
            <span className='question--card__like-container'>
            <p>Useful</p>
            <LikeSVG height={'24'}  fill={'#3483fa'} /* filled={'#3483fa'} */></LikeSVG>
            <p>{"("+props?.question.like+")"}</p>
            </span>
            <span className='question--card__dislike-container'>
            <DislikeSVG height={'24'}  fill={'#3483fa'} /* filled={'#3483fa'} */></DislikeSVG>
            </span>
            </div>


        </div>
    )
}

export default QuestionCard