import React from 'react'
import Link from 'next/link'
import './not-found.css'

const NotFound = () => {
  return (
    <div className=' not-found-container'>
        <p>No encontramos lo que buscas :/</p>
        
        <Link href='/' className='not-found-link'>Volver</Link>
    </div>
  )
}

export default NotFound