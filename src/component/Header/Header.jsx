import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link className='a' to="/">Home</Link>
            <Link className='a' to="/about">About</Link>
            <Link className='a' to="/review">Order Review</Link>
            <Link className='a' to="/contact">Contact</Link>
            <Link className='a' to="/grantpa">Grantpa</Link>
        </nav>
    );
};

export default Header;