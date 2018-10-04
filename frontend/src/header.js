import React from 'react';
import { Link } from 'react-router-dom';

let Header = () =>
    <div className="header">
        <Link to="/"
            className="nav-item">
            <p>Hidden Joys</p>
        </Link>
        <Link to="/about"
            className="nav-item">
            <p>About</p>
        </Link>
    </div>

export default Header;