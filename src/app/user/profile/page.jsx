'use client'
import React, { useEffect, useState } from 'react'
import './UserProfilePage.css'


const page = () => {
  const [getUserData, setUserData] = useState()
  //////////////////////peticion datos del usuario
  useEffect(() => {
    const request = async () => {
      const res = await fetch(`/api/user/profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail: "user8@gmail.com" }),
      });
      const data = await res.json();
      setUserData(data)
      console.log(await data)
    }
    request()
  }, [])
  //////////////////////Manejo de fechas


  return (
    <div className='UserProfilePage'>
      {getUserData &&
        <>
          <img className='UserProfilePage__img'></img>
          <h1 className='UserProfilePage__username'>{getUserData.username}</h1>
          <span>ID:{getUserData.id}</span>
          <span>Email:{getUserData.email}</span>
          <span>CreatedAt:{getUserData.createdAt}</span>
          <span>Last Updated:{getUserData.updatedAt}</span>
          <div>
            Extra options
          </div>
        </>
      }

      {/* Profile */}
    </div>
  )
}

export default page
