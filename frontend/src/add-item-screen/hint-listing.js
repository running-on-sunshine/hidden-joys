import React from 'react';

let HintListings = (props) => 
    <div className='hint-listings'>
        {props.hints.map(hint => 
            <div className='hint-listing' key={hint.id}>
                <div className='hl-text-wrapper'>
                    <p className='hint-listing-text'>{hint.hint}</p>
                </div>
                <div className='hl-btn-wrapper'>
                    <button
                        className='form-button'
                        onClick={() => {
                            props.removeHint(hint)
                        }}
                    >-</button>
                </div>
            </div>
        ).reverse()}
    </div>

export default HintListings;