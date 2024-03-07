import React from 'react'
import './NothingHere.css'
import MainButton from '../atoms/MainButton'
import Link from 'next/link'

const NothingHere = (props) => {
  return (
    <div className='NothingHere'>
      <div className='NothingHere__message-container'>
        <p>There is nothing here.</p>
        <p>Add something! </p>
        <p>:)</p>
        {/* <div className='NothingHere-message__buton-container'> */}
        <Link href={props.redirectLink}>
          <MainButton text={props.buttonText} icon={props.buttonIcon} />
        </Link>
        {/* </div> */}
        {/* <button className='NothingHere-message__button'></button> */}
        <></>
      </div>
    </div>
  )
}

export default NothingHere