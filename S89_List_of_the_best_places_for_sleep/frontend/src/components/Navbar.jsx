import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Add custom styles for the Navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Best Places</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/destinations">Destinations</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;