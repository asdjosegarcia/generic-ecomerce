import React from 'react'
import './Navbar.css'
// import SearchInput from '@components/SearchInput.jsx'
import SearchInput from '../components/SearchInput'

const Navbar = () => {
  return (
    <nav className='nav__container'>
        <div>Logo </div>
        <div>ubicación</div>
        <SearchInput></SearchInput>
        <ul>
            <li>Categorias</li>
            <li>Ofertas</li>
            <li>Historial</li>
            <li>Supermercado</li>
            <li>Vender</li>
            <li>Ayuda</li>
        </ul>
        <span>imagen promocional</span>
        <ul>
            <li>Crea tu cuenta</li>
            <li>Ingresá</li>
            <li>Mis compras</li>
            <li>🛒</li>
        </ul>
    </nav>


  )
}

export default Navbar