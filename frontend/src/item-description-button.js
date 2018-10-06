import React from 'react';
import { Link } from 'react-router-dom';

let ItemDescriptionButton = (props) => 
    <Link to={`/items/${props.id}`}>
        <button className='form-button'>View Item Description</button>
    </Link>
    

export default ItemDescriptionButton;