import React from 'react';

let ItemDetailsHints = (props) => 
    <div className='item-detail-body-section'>
        <p className='item-details-section-title'>Hints</p>
        <div className='hints-container'>
            {props.hints.map(hint =>
                <p className='item-detail-hint-listing' key={hint.id}>{hint.hint}</p>    
            )}
        </div>
    </div>

export default ItemDetailsHints;