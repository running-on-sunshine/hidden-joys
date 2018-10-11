import React from 'react';
import Header from './header';
import Footer from './footer';
import SearchBox from './map-screen/search-box';
import SearchButton from './home-screen/search-button';
import AddButton from './home-screen/add-button';
import FoundButton from './home-screen/found-button';
import './stylesheets/home-screen-styling.css';

let HomeScreen = () =>
    <div className="full-screen">
        <Header />
        <div className="screen home-screen">
            <h1 className="main-title">Hidden Joys</h1>
            <div className="search-container">
                <SearchBox />
                <SearchButton />
            </div>
            <div className="buttons-container">
                <AddButton />
                <FoundButton />
            </div>
        </div>
        <Footer />
    </div>

export default HomeScreen;