import React from 'react';
import { NavLink } from 'react-router-dom';
import PlayDropdownMenu from './play-dropdown-menu';

let Header = () =>
    <div className="header">
        <NavLink to='/' className="nav-item">
            <p className="nav-item">Hidden Joys <i className="far fa-smile"></i> 
            </p>
        </NavLink>
        <div className='header-right'>
            <NavLink to='/about' className="nav-item">
                <p className="nav-item">About</p>
            </NavLink>
            <PlayDropdownMenu />
        </div>
    </div>

export default Header;