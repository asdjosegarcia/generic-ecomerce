import React from 'react'
// import LogoutButton from './LogoutButton'
import {signOut} from 'next-auth/react'//importamos la funcion que nos desloquea desde next-auth


const LogoutConfirmation = () => {
  return (
    <div>
        <p>You are sure?</p>
        {/* <LogoutButton></LogoutButton> */}
       <button onClick={()=>signOut()}>Logout</button> {/* usamos la funcion que importamos para que nos desloguee */}
        <buttom>Cancel</buttom>
    </div>
  )
}

export default LogoutConfirmation