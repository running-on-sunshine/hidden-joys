import React from 'react';

let ItemDetailScreenMapContainer = (props) => 
    <div className='item-detail-map-container'>
        <iframe title={props.id} src={`https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d3356.8829468635663!2d${props.lng}!3d${props.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d${props.lat}!2d${props.lng}!5e0!3m2!1sen!2sus!4v1539189750210`} width="100%" height="100%" frameBorder="0" style={{border:"0"}} allowFullScreen></iframe>
    </div>

export default ItemDetailScreenMapContainer;