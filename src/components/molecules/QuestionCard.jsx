import React,{useContext,} from 'react'
import LikeSVG from '@/SVG/LikeSVG'
import DislikeSVG from '@/SVG/DislikeSVG'
import MoreSVG from '@/SVG/MoreSVG'
import './QuestionCard.css'
import { variableContext } from "@/context/contexto";


const QuestionCard = (props) => {
    // console.log(props?.question)
    const contexto = useContext(variableContext)


    return (
        <div className='question--card__container'>
            {/* <img src={props?.question.img} alt="" />  para el dia que cree cuentas */}
            <h4>{props?.question.username}</h4>
            {/* <img src="" alt="" className='question--card__user-perfile-img' /> */}
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
            <button className='MoreSVG_button' onClick={() => contexto.setBackground(true)}>
            <MoreSVG  width="24px"></MoreSVG>
            </button>
            </div>
            {/* {getQuestionMenu &&
            <div onClick={() => setQuestionMenu(false)}  className='question--card__menu-background'>
                <div className='question--card__menu'>holaaaa</div>
            </div>
            } */}
        </div>
    )
}

export default QuestionCard