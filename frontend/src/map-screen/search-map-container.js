import React from "react";
import SearchMap from './search-map';

export default class SearchMapContainer extends React.Component {
    render() {
        return (
            <SearchMap
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `100%`, width: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
        )
    }
};