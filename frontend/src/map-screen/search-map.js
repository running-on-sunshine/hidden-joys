import React from "react";
import { connect } from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const SearchMap = withScriptjs(withGoogleMap((props) =>  {
    return (
        <GoogleMap
            defaultZoom={14}
            center={ {lat:props.lat, lng: props.lng} }
        ></GoogleMap>
    )
}));

export default connect(
    state => ({lat:state.lat, lng:state.lng})
)(SearchMap);