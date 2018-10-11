import React from 'react';

let FilterMapButtons = (props) =>
    <div className='filter-map-buttons'>
        <button 
            className='all-filter filter-button'
            onClick={event => {
                event.preventDefault();
                props.fetchAllItems();
            }}>All
        </button>
        <button 
            className='not-found-filter filter-button'
            onClick={event => {
                event.preventDefault();
                props.fetchHiddenItems();
            }}>Not Found
        </button>
        <button
            className='found-filter filter-button'
            onClick={event => {
                event.preventDefault();
                props.fetchFoundItems();
            }}>Found
        </button>
    </div>

export default FilterMapButtons;