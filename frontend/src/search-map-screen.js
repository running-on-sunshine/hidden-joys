import React from 'react';
import Header from './header';
import SearchMapContainer from './map-screen/search-map-container';
import './map-screen/map-styling.css';

let SearchMapScreen = (props) => 
    <div>
        <Header />
        <p>Search Map Screen</p>
        <div className='map-container'><SearchMapContainer /></div>
    </div>

export default SearchMapScreen;