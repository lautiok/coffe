import React from 'react';
import logo from '../../assets/logo.png';
import './HeaderModule.css';

export const Header = () => {
    return (
        <header>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>AboutMe</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className='redes'>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
            </div>
        </header>
    );
};
