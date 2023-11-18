// import React from 'react';
import logo from '../../assets/logo2.png';
import { Link } from 'react-router-dom';
import Profile from './Profile';

import '../Navbar/Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="app__navbar">
                <div className="app__navbar-logo">
                    <img src={logo} alt='app-logo' />
                </div>
                <ul className='app__navbar-links'>
                    <li className='p__opensans'><Link className='nav-link' to="/homepage">Home</Link></li>
                    <li className='p__opensans'><Link className='nav-link' to='/faq'>FAQ</Link></li>
                    <li className='p__opensans'><Link className='nav-link' to='/about-us'>About Us</Link></li>
                    <li className='p__opensans'><Link className='nav-link' to="/contact">Contact Us</Link></li>
                </ul>

                <div className='menu-container'>
                    <Profile />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
