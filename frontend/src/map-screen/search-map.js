import React from "react";
import { connect } from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import ItemMarker from './item-marker';

const SearchMap = withScriptjs(withGoogleMap((props) =>  {
    let markers = props.items.map( item => 
            <ItemMarker 
                key={item.id}
                itemId={item.id}
                location={{lat:Number(item.lat), lng:Number(item.lng)}}
                updateActiveMarker={props.updateActiveMarker}
                item={item}
                activeMarker={props.activeMarker}
            />
        )
    return (
        <GoogleMap
            defaultZoom={14}
            center={ {lat: props.lat, lng: props.lng} }
            onClick={() => {props.updateActiveMarker(null)}}
            onCenterChanged={() => {
                console.log('Center Changed')
            }}
        >
        {markers}
        </GoogleMap>
    )
}));

export default connect(
    state => ({lat: state.lat, lng: state.lng, items:state.items})
)(SearchMap);