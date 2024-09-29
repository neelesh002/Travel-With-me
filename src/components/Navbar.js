import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaPhoneAlt, FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className='navbar'>
            <h1 className='navbar-logo'>Trippy</h1>
            <div className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
                <Link to='/home'>
                    <FaHome /> Home
                </Link>
                <Link to='/about'>
                    <FaInfoCircle /> About
                </Link>
                <Link to='/service'>
                    <FaBriefcase /> Service
                </Link>
                <Link to='/contact'>
                    <FaPhoneAlt /> Contact
                </Link>
                <button className='signup-btn'>
                    Signup
                </button>
            </div>

            <div className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
    );
};

export default Navbar;
