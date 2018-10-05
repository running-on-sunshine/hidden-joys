import React from 'react';
import { Link } from 'react-router-dom';

let FoundButton = () =>
    <Link to="/found">
        <button className="nav-button">
            <i className="far fa-grin-beam"></i> Found Joys
        </button>
    </Link>

export default FoundButton;