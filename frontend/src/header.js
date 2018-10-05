import React from 'react';
import { Link } from 'react-router-dom';
import PlayDropdownMenu from './play-dropdown-menu';

let Header = () =>
    <div className="header">
        <Link to="/"
            className="nav-item">
            <p>
                Hidden Joys <i className="far fa-smile"></i> 
            </p>
        </Link>
        <Link to="/about"
            className="nav-item">
            <p>About</p>
        </Link>
        <PlayDropdownMenu />
    </div>

export default Header;