'use client'
import React,{useState,useEffect} from 'react'
import { useSession } from 'next-auth/react';
import UserNotificationsList from '@/components/organisms/UserNotificationsList';


const page = () => {
  const { data: session } = useSession();//cargamos datos del usuario en session   
  const [getUserNotifications,setUserNotifications]=useState()


  useEffect(() => {
    const request=async()=>{
      if (session) {//si params.id tiene algo
        const res = await fetch(`/api/user/notifications`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userEmail:"user8@gmail.com"}),
        });
        const data = await res.json();
        setUserNotifications(data)
        // console.log(await data)
      } 
    }
    request()
}, [session])



  return (
    <div className='userNotificationPage'>
      {getUserNotifications&&
        <UserNotificationsList notifications={getUserNotifications.notification} />
      }
    </div>
  )
}

export default page