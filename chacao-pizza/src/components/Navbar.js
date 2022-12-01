import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <a href='/'><img src='logonav2.webp'/></a>
            </div>
            <nav>
                <ul className='nav-links'>
                    <li><a href='#'>Inicio</a></li>
                    <li><a href='/locales'>Locales</a></li>
                    <li><a href='/login'>Iniciar sesión</a></li>
                    <li><a href='/help'>Ayuda</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;