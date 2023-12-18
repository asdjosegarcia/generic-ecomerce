import React from 'react'
import './Navbar.css'
// import SearchInput from '@components/SearchInput.jsx'
import SearchInput from '../components/SearchInput'
import MenuSVG from '../SVG/MenuSVG'
import CartSVG from '../SVG/CartSVG'
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className='nav__container'>
            <img className='comerce__icon'   src='/img/open-trade-1.jpg' alt='Opentrade icon' />
            <SearchInput></SearchInput>
                <div className='mobile__menu' alt='search bar'>
                    <MenuSVG width={'40px'}  height={'40px'} fill={'#696969'} ></MenuSVG>
                    <CartSVG width={'40px'}  height={'40px'}  fill={'#696969'}></CartSVG>
                </div>

            {/* <div>ubicación</div> */}
            {/*         <ul>
            <li>Categorias</li>
            <li>Ofertas</li>
            <li>Historial</li>
            <li>Supermercado</li>
            <li>Vender</li>
            <li>Ayuda</li>
        </ul> */}
            {/* <span>imagen promocional</span> */}

            {/*         <ul className='personal-menu'>
            <li>Crea tu cuenta</li>
            <li>Ingresá</li>
            <li>Mis compras</li>
            <li>🛒</li>
        </ul> */}
        </nav>


    )
}

export default Navbar