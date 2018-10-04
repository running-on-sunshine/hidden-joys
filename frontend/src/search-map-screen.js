import React from 'react';
import Header from './header';
import SearchMapContainer from './map-screen/search-map-container';
import PlacesWithStandaloneSearchBox from './map-screen/search-box';
import './stylesheets/map-styling.css';

let SearchMapScreen = (props) => 
    <div className="full-screen">
        <Header />
        <div className="screen">
            <PlacesWithStandaloneSearchBox />
            <div className='map-container'><SearchMapContainer /></div>
        </div>
    </div>

export default SearchMapScreen;