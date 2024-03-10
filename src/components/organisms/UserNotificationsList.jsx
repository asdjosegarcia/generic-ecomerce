import React from 'react'
import './UserNotificationsList.css'
import UserNotificationCardZero from '../molecules/UserNotificationCardZero'


const UserNotificationsList = (props) => {
  // console.log(props.notifications);
  const notificationsToRender = props.notifications.map((notification, index) => {
    switch (true) {//al ser diferente notificaciones estas tendran tipos ej notificacion por compra sera tipo 20-29 y notificacion basica tipo 10-19, tipo texto 0-9
      case (notification.type == null):
        return <p key={index}>null</p>
      case (notification.type < 10):
        return <UserNotificationCardZero key={index} notification={notification} />;
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
