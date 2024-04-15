'use client'
import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';
import UserNotificationsList from '@/components/organisms/UserNotificationsList';
import Loading from '@/components/templates/Loading';
import './UserNotificationPage.css'


const page = () => {
  const { data: session } = useSession();//cargamos datos del usuario en session   
  const [getUserNotifications, setUserNotifications] = useState()
  const [getLoading, setLoading] = useState(true)

  // console.log(session.user.email);

  useEffect(() => {
    const request = async () => {
      if (session) {//si params.id tiene algo
        const res = await fetch(`/api/user/notifications`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userEmail: session.user.email }),
        });
        const data = await res.json();
        setUserNotifications(data)
        setLoading(false)
        // console.log(await data)
      }
    }
    request()
  }, [session])



  return (
    <>
      {(getLoading) ?
        <Loading />
        :
        <div className='userNotificationPage'>
          {getUserNotifications &&
            <UserNotificationsList userEmail={session?.user?.email} notifications={getUserNotifications.notification} />
          }
        </div>
      }
    </>
  )
}

export default page