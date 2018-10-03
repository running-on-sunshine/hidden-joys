import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const SearchMap = withScriptjs(withGoogleMap((props) =>  {
    return (
        <GoogleMap
            defaultZoom={14}
            center={ {lat:33.848992, lng: -84.373203} }
        ></GoogleMap>
    )
}));

export default SearchMap;