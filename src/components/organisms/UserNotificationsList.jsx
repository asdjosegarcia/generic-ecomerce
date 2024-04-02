import React from 'react'
import './UserNotificationsList.css'
import UserNotificationCardZero from '../molecules/UserNotificationCardZero'
import UserNotificationCardTen from '../molecules/UserNotificationCardTen'
import UserNotificationCardTwenty from '../molecules/UserNotificationCardTwenty'
import './UserNotificationsList.css'


const UserNotificationsList = (props) => {


  const notificationsToRender = props.notifications.map((notification, index) => {
    switch (true) {//al ser diferente notificaciones estas tendran tipos ej notificacion por compra sera tipo 20-29 y notificacion basica tipo 10-19, tipo texto 0-9
      case (notification.type == null):
        return <p key={index}>null</p>
      case (notification.type < 10):
        return <UserNotificationCardZero key={index} notification={notification} userEmail={props.userEmail} />;
      case (notification.type < 20):
        return <UserNotificationCardTen key={index} notification={notification} userEmail={props.userEmail} />;
      case (notification.type < 30):
        return <UserNotificationCardTwenty key={index} notification={notification} userEmail={props.userEmail} />;
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
