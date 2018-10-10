import React from "react";
import SearchMap from './search-map';
import keys from '../keys';

class SearchMapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            location: this.props.location,
            activeMarker: null
        };
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.items !== this.props.items) {
            this.setState({
                items: nextProps.items,
                location: nextProps.location
            });
        };
    };

    closeOtherMarkers = (itemId) => this.setState({activeMarker: itemId});

    render() {
        return (
            <SearchMap 
                items={this.props.items}
                location={this.props.location}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${keys.GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%`, width: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                activeMarker={this.state.activeMarker}
                closeOtherMarkers={this.closeOtherMarkers}
            />
        )
    }
};

export default SearchMapContainer;