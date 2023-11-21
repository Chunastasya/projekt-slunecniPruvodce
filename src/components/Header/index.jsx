import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import Logo from './img/Logo.png'

const Header = () => {
    return (
        <header className="header">
        <NavLink to=''>
            <img className='header_logo' src={Logo}></img>
        </NavLink>        
        <nav className='header_links'>
            <NavLink to='/test' className='header_link'>Test</NavLink>
            <NavLink to='/map' className='header_link'>Mapa</NavLink>
            </nav>
        </header>
    )
}

export default Header;