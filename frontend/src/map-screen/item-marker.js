import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

let ItemMarker = (props) => 
    <Marker
        position={props.location}
    ></Marker>

export default ItemMarker;