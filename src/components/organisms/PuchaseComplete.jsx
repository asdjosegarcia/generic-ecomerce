import React from 'react'
import './PuchaseComplete.css'
import CheckCompleteSVG from '@/SVG/CheckCompleteSVG'
import { useRouter } from 'next/navigation'

const PuchaseComplete = (props) => {
  const router = useRouter()
  return (
    <>
        <div className='puchase-complete__background'>
      </div>
    <div className='puchase-complete__container'>
        <p className='puchase-complete__title'>PuchaseComplete!</p>
        {/* <img className='puchase-complete__img' src="" alt="" /> */}
        <CheckCompleteSVG fill={'green'} width={"48px"}></CheckCompleteSVG>
        <p className='puchase-complete__thanks-user'>Thanks {props.username}!</p>
        <p className='puchase-complete__msj'>We'll let you know when it's on its way ;)</p>
        <button className='puchase-complete__button' onClick={()=>{router.push('/')}}>Keep buying!</button>
      </div>
    </>
  )
}

export default PuchaseComplete