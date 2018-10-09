import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import ItemMarker from './item-marker';

const SearchMap = withScriptjs(withGoogleMap((props) =>  {
    let markers = props.items.map( item => 
            <ItemMarker 
                key={item.id}
                itemId={item.id}
                closeMarkers={props.closeOtherMarkers}
                item={item}
                location={{lat:Number(item.lat), lng:Number(item.lng)}}
                activeMarker={item.id === props.activeMarker ? true : false}
            />
        )
    return (
        <GoogleMap
            defaultZoom={14}
            center={ props.location }
        >
        {markers}
        </GoogleMap>
    )
}));

export default SearchMap;