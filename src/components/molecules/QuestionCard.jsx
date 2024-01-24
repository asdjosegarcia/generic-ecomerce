import React, { useContext, useState } from 'react'
import LikeSVG from '@/SVG/LikeSVG'
import DislikeSVG from '@/SVG/DislikeSVG'
import MoreSVG from '@/SVG/MoreSVG'
import './QuestionCard.css'
import { variableContext } from "@/context/contexto";
// import LikeDislikeFilledSVG from '@/SVG/LikeDislikeFilledSVG'
import LikeFilledSVG from '@/SVG/LikeFilledSVG'

let booleanLike = false
let booleanDislike = false

const QuestionCard = (props) => {
    // console.log(props?.question)
    const contexto = useContext(variableContext)
    const [getLikes, setLikes] = useState(props?.question.like)
    const [getDislikes, setDislikes] = useState(props?.question.dislike)

    const like = () => {
        booleanLike = !booleanLike//invertimos los valores para que al renderizar nos de true
        if (booleanLike == true) { //si booleanLike es verdadero
            setLikes(getLikes + 1) //sumamos 1 like
            if (booleanDislike == true) {//si booleanDislike es verdadero
                dislike() //ejecutamos dislike para que se desmarque y reste 1 dislike
            }
        } else {
            setLikes(getLikes - 1)//restamos 1 like
        }
    }

    const dislike = () => { 
        booleanDislike = !booleanDislike
        if (booleanDislike == true) {
            setDislikes(getDislikes + 1)
            if (booleanLike == true) {
                like()
            }
        } else {
            setDislikes(getDislikes - 1)
        }
    }


    return (
        <div className='question--card__container'>
            {/* <img src={props?.question.img} alt="" />  para el dia que cree cuentas */}
            <h4>{props?.question.username}</h4>
            {/* <img src="" alt="" className='question--card__user-perfile-img' /> */}
            <p>{props?.question.question}</p>
            <div className='question--card__like-dislike-container'>
                <span onClick={() => { like() }} className='question--card__like-container'>
                    <p>Useful</p>
                    {booleanLike ?
                        <LikeFilledSVG fill={'#3483fa'} height={'24px'}></LikeFilledSVG>
                        :
                        <LikeSVG height={'24'} fill={'#3483fa'} ></LikeSVG>
                    }
                    <p className='question--card__like-numbers'>{"(" + getLikes + ")"}</p>
                </span>
                <span onClick={() => { dislike() }} className='question--card__dislike-container'>
                    {booleanDislike ?
                        <LikeFilledSVG fill={'#3483fa'} height={'24px'}></LikeFilledSVG>
                        :
                        <DislikeSVG height={'24'} fill={'#3483fa'} ></DislikeSVG>
                    }
                </span>
                <button className='MoreSVG_button' onClick={() => contexto.setBackground(true)}>
                    <MoreSVG width="24px"></MoreSVG>
                </button>
            </div>

        </div>
    )
}

export default QuestionCard