import React from 'react';
import { NavLink } from 'react-router-dom';
import PlayDropdownMenu from './play-dropdown-menu';

let Header = () =>
    <div className='header'>
        <NavLink to='/' className='header-navigation-item'>
            <p className="logo">Hidden Joys <i className="far fa-smile"></i></p>
        </NavLink>
        <div className='header-right'>
            <NavLink to='/about' className='header-navigation-item'>
                <p className='header-navigation-item'>About</p>
            </NavLink>
            <PlayDropdownMenu />
        </div>
    </div>

export default Header;