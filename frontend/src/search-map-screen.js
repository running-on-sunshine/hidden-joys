import React from 'react';
import Header from './header';
import SearchMapContainer from './map-screen/search-map-container';
import PlacesWithStandaloneSearchBox from './map-screen/search-box';
import CurrentLocationButton from './map-screen/current-location-button';
import './stylesheets/map-styling.css';

let SearchMapScreen = (props) => 
    <div className="full-screen">
        <Header />
        <div className="screen">
            <div className='search-input-container'>
                <CurrentLocationButton />
                <PlacesWithStandaloneSearchBox />
            </div>
            <div className='map-container'><SearchMapContainer /></div>
        </div>
    </div>

export default SearchMapScreen;