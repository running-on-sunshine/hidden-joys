import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import ItemInfoWindowContent from './item-info-window'; 

let ItemMarker = (props) => 
    <Marker
        onClick={() => {
            props.updateActiveMarker(props.item);
        }}
        position={props.location}
    >
    {props.item === props.activeMarker
        ? <InfoWindow
            maxWidth={300}
            position={props.location}
            onCloseClick={() => props.updateActiveMarker(null)} 
        >
            <ItemInfoWindowContent item={props.item}/>
        </InfoWindow>
        : null}
    </Marker>

export default ItemMarker;