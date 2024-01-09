import React from 'react'   

const MobileMenu = () => {
  return (
    <div className='mobile-menu__container'>
        <div className='mobile-menu__user' >
            <img></img>
            <p>username</p>
            <button>{"mi perfil>"}</button>

        </div>
        <div className='mobile-menu__options'>
            <button>Inicio</button>
            <button>Buscar</button>
            <button>Notificaciones</button>
            <button>Mis Compras</button>
            <button>Favoritos</button>
            <button>Ofertas</button>
        </div>
    </div>
  )
}

export default MobileMenu