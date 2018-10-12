import React from 'react';
import { Link } from 'react-router-dom';
import ItemDetailsStatusContainer from './item-details-status-container';
import ItemDetailScreenMapContainer from './item-detail-map';
import ItemDetailsHints from './item-details-hints';

let ItemDetailsForm = (props) => 
    <div className='item-detail-form'>
        <div className='item-detail-form-header center-div'>
            <h3 className='item-detail-title'>{`${props.item.title}`}</h3>
        </div>
        <hr/>
        <div className='item-detail-form-body'>
            <ItemDetailsStatusContainer item={props.item}/>
            <div className='item-detail-body-section'>
                <div className='mobile-map-display'>
                    <ItemDetailScreenMapContainer lat={props.item.lat} lng={props.item.lng}/>
                </div>
            </div>
            <ItemDetailsHints hints={props.hints}/>
        </div>
        <hr/>
        <div className='item-detail-form-footer center-div'>
            <Link to='/add'><button className='detail-screen-button'>Add</button></Link>
            <Link to='/search'><button className='detail-screen-button'>Search</button></Link>
        </div>
    </div>

export default ItemDetailsForm;