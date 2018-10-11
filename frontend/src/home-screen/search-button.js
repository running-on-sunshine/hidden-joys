import React from 'react';
import { Link } from 'react-router-dom';

let SearchButton = () =>
    <Link to="/search">
        <button className="search-button">
            <i className="fas fa-search"></i>
        </button>
    </Link>

export default SearchButton;