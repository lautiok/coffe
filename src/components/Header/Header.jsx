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
                    <li> <Link to="/aboutus">AboutMe</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li> <Link to="/newsletter">Newsletter</Link> </li>
                </ul>
            </nav>
            <div className='redes'>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
            </div>
        </header>
    );
};
