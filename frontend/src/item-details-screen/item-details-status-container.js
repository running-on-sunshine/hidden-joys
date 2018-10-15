import React from 'react';
import { Link } from 'react-router-dom';

let ItemDetailsStatusContainer = (props) =>
    <div className='item-detail-body-section status-wrapper'>
        <div 
            className='item-detail-image-container'
            style={{
                backgroundImage:`url(${props.item.image}`,
                backgroundSize:'cover'
            }}
        ></div>
        <div className='item-detail-status-section'>
            <p className='item-details-section-title'>Status:</p>
            {props.item.item_found ?
            <div className='status-display-container'>
                <p className='item-details-status-text'>Item Found!</p>
                <div className='status-comment-container'>
                    <p className='status-comment-font'>{props.item.found_comment}</p>
                </div>
            </div> :
            <div className='status-display-container'>
                <p className='item-details-status-text'>Item still hidden!</p>
                <div className='status-comment-container'>
                    <Link to='/found'><button className='detail-screen-button'>Found</button></Link>
                </div>
            </div>
            }
        </div>
    </div>

export default ItemDetailsStatusContainer;