import React from 'react';
import { Link } from 'react-router-dom';

let ItemDescriptionButton = (props) => 
    <Link to={`/items/${props.id}`}>
        <button className='form-button'>Got To Item Description Page</button>
    </Link>
    

export default ItemDescriptionButton;