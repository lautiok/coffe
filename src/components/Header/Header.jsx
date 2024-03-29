import React from 'react';
import logo from '../../assets/logo.png';
import './HeaderModule.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>AboutMe</li>
                    <li><Link to="/products">Products</Link></li>
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
