import React, { useState, useContext } from 'react'
import './QuestionInput.css'
import { useSession } from 'next-auth/react';
import { variableContext } from "@/context/contexto";


// let questionValue = ''//variable para almacenar el valor del textarea
const QuestionInput = (props) => {
    const contexto = useContext(variableContext)
    const { data: session } = useSession();//cargamos datos del usuario en session
    const [getMessage, setMessage] = useState('');
    const [getTextareaValue,setTextareaValue]=useState('')



    const sendQuestion = async (event) => {
        setMessage('')
        event.preventDefault();//prevenimos el comportamiento de recarga de pagina

        if (session?.user && getTextareaValue !== '') {
            const { name, email } = session.user;
            const res = await fetch(`/api/products/questions/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: name,
                    question: getTextareaValue,
                    productCompleteId: props.porduct.id
                }),
            });
            if (res.ok) {
                contexto.setNotificationText('Question added')
                setTextareaValue('') 
                contexto.setNewQuestion(
                    {
                        username:name,
                        question: getTextareaValue,
                        like: 0,
                        dislike:0,
                    }
                )
                // contexto.addNew
            } else {
                contexto.setNotificationText('Error')
            }
            // console.log(name,questionValue,props.porduct.id)
            // console.log(props)

        } else {
            setMessage('The question cannot be empty')
        }
        // console.log(questionValue)
    }


    return (
        <>
            <form className="question-input__container" onSubmit={sendQuestion}>
                <div>
                <p className='question-input__caracters-number'>{getTextareaValue.length}/90</p>
                 <textarea type="text" placeholder="Ask a question" className="question-input__input" value={getTextareaValue} maxLength={90} rows="2"  onChange={(e) => { setTextareaValue(e.target.value)   }} />
                </div>
                <button className="question-input__button">Send</button>
            </form>
            <span style={{ color: 'red',textAlign:'center' }}>{getMessage}</span>
        </>
    )
}

export default QuestionInput