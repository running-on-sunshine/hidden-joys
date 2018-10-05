import React from 'react';
import { Link } from 'react-router-dom';

let AddButton = () =>
    <Link to="/add">
        <button className="nav-button">
            <i className="fas fa-plus circle add-icon"></i> Add Joy
        </button>
    </Link>

export default AddButton;