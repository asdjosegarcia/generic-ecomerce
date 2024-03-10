import React from 'react'
import './UserNotificationsList.css'
import UserNotificationCardZero from '../molecules/UserNotificationCardZero'
import UserNotificationCardTen from '../molecules/UserNotificationCardTen'


const UserNotificationsList = (props) => {
  // console.log(props.notifications);
  const reversedNotifications = [...props.notifications].reverse()//invertimos la lista para tener las notificaciones nuevas primero


  const notificationsToRender = reversedNotifications.map((notification, index) => {
    switch (true) {//al ser diferente notificaciones estas tendran tipos ej notificacion por compra sera tipo 20-29 y notificacion basica tipo 10-19, tipo texto 0-9
      case (notification.type == null):
        return <p key={index}>null</p>
      case (notification.type < 10):
        return <UserNotificationCardZero key={index} notification={notification} userEmail={props.userEmail} />;
      case (notification.type < 20):
        return <UserNotificationCardTen key={index} notification={notification} userEmail={props.userEmail} />;
      default:
        return <p key={index}>default</p>;
    }
  }
  )

  return (
    <div className='UserNotificationsList'>
      {notificationsToRender}
    </div>
  )
}

export default UserNotificationsList
