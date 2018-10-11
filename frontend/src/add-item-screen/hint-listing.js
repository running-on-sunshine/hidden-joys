import React from 'react';

let HintListings = (props) => 
    <div className='hint-listings'>
        {props.hints.map(hint => 
            <div className='hint-listing' key={hint.id}>
                <p className='hint-listing-text'>{hint.hint}</p>
                <button
                    className='form-button'
                    onClick={() => {
                        props.removeHint(hint)
                    }}
                >-</button>
            </div>
        ).reverse()}
    </div>

export default HintListings;