import React from 'react';
import PlayDropdownMenu from './play-dropdown-menu';

let Header = () =>
    <div className="header">
        <a href="/#/" 
            className="nav-item">
            <p className="nav-item">Hidden Joys <i className="far fa-smile"></i> 
            </p>
        </a>
        <div className='header-right'>
            <a href="/#/about"
                className="nav-item">
                <p className="nav-item">About</p>
            </a>
            <PlayDropdownMenu />
        </div>
    </div>

export default Header;