import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/map-styling.css';

let ItemInfoWindowContent = (props) => {
    let styles = {
        background: `url(${props.item.image})`,
        backgroundSize: 'cover'
    };

    return (
        <div className='info-window-container'>
            <div className='info-window-section'>
                <div className='info-window-image' style={styles}></div>
            </div>
            <div className='info-window-section'>
                <p className='info-window-title'>{props.item.title}</p>
                <p className='info-window-status'>Status: {props.item.item_found ? 'Found' : 'Not Found'}</p>
                <Link to={`/items/${props.item.id}`} >
                    <p className='info-window-link'>Item Details</p>
                </Link>
            </div>
        </div>
    )
};

export default ItemInfoWindowContent;