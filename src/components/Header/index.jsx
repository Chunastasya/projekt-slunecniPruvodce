import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Logo from './img/Logo.png'

const Header = () => {
    return (
        <header className="header">
        <img className='header_logo' src={Logo}></img>
        <nav className='header_links'>
            <Link to='/test' className='header_link'>Test</Link>
            <Link to='/map' className='header_link'>Mapa</Link>
            </nav>
        </header>
    )
}

export default Header;