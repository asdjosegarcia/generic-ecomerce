import React,{useContext,useState} from 'react'
import LikeSVG from '@/SVG/LikeSVG'
import DislikeSVG from '@/SVG/DislikeSVG'
import MoreSVG from '@/SVG/MoreSVG'
import './QuestionCard.css'
import { variableContext } from "@/context/contexto";
// import LikeDislikeFilledSVG from '@/SVG/LikeDislikeFilledSVG'
import LikeFilledSVG from '@/SVG/LikeFilledSVG'

let booleanLike=false
let booleanDislike=false

const QuestionCard = (props) => {
    // console.log(props?.question)
    const contexto = useContext(variableContext)
    const [getLikes,setLikes]=useState(props?.question.like)
    const [getDislikes,setDislikes]=useState(props?.question.dislike)

    const like=()=>{
        booleanLike=!booleanLike
        if(booleanLike==true){
            setLikes(getLikes+1)
        }else{
            setLikes(getLikes-1)
        }
    }
    const dislike=()=>{ //esto no es necesario ya que no se ve un numero :/
        booleanDislike=!booleanDislike
        if(booleanDislike==true){
            setDislikes(getDislikes+1)
        }else{
            setDislikes(getDislikes-1)
        }
    }


    return (
        <div className='question--card__container'>
            {/* <img src={props?.question.img} alt="" />  para el dia que cree cuentas */}
            <h4>{props?.question.username}</h4>
            {/* <img src="" alt="" className='question--card__user-perfile-img' /> */}
            <p>{props?.question.question}</p>
            <div className='question--card__like-dislike-container'>
            <span onClick={()=>{like()}} className='question--card__like-container'>
            <p>Useful</p>
            {booleanLike ?
            <LikeFilledSVG fill={'#3483fa'} height={'24px'}></LikeFilledSVG>
            :
            <LikeSVG height={'24'}  fill={'#3483fa'} ></LikeSVG>
            }
            <p className='question--card__like-numbers'>{"("+getLikes+")"}</p>
            </span>
            <span  onClick={()=>{dislike()}} className='question--card__dislike-container'>
            <DislikeSVG height={'24'}  fill={'#3483fa'} ></DislikeSVG>
            </span>
            <button className='MoreSVG_button' onClick={() => contexto.setBackground(true)}>
            <MoreSVG  width="24px"></MoreSVG>
            </button>
            </div>

        </div>
    )
}

export default QuestionCard