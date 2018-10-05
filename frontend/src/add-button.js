import React from 'react';
import { Link } from 'react-router-dom';

let AddButton = () =>
    <Link to="/add">
        <button className="nav-button">Add Joy</button>
    </Link>

export default AddButton;