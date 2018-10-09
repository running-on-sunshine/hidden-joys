import React from "react";
import SearchMap from './search-map';
import keys from '../keys';


class SearchMapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMarker: null
        };
    };

    updateActiveMarker = (item) => {
        this.setState({activeMarker: item});
    };

    render() {
        return (
            <SearchMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${keys.GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%`, width: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                location={this.props.location}
                activeMarker={this.state.activeMarker}
                updateActiveMarker={this.updateActiveMarker}
            />
        )
    }
};

export default SearchMapContainer;