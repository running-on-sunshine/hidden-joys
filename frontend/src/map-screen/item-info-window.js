import React from 'react';

let ItemInfoWindowContent = (props) => {
    return (
        <div>
            <p>{props.item.title}</p>
            <p>Image</p>
            <p>Link</p>
        </div>
    )
};

export default ItemInfoWindowContent;