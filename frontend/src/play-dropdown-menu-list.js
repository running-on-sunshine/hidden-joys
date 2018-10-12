import React from 'react';
import { NavLink } from 'react-router-dom';

let PlayDropDownMenuList = () =>
    <ul className='play-dropdown-menu-list'>
        <li className='dropdown-list-item'>
            <NavLink to='/search' className='dropdown-link'>Search Joys</NavLink>
        </li>
        <li className='dropdown-list-item'>
            <NavLink to='/add' className='dropdown-link'>Add Joy</NavLink>
        </li>
        <li className='dropdown-list-item'>
            <NavLink to='/found' className='dropdown-link'>Found Joys</NavLink>
        </li>
    </ul>

export default PlayDropDownMenuList;