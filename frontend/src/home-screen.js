import React from 'react';
import Header from './header';
import Footer from './footer';
import AddButton from './add-button';
import FoundButton from './found-button';
import './stylesheets/home-screen-styling.css';

let HomeScreen = () =>
    <div className="full-screen">
        <Header />
        <div className="screen home-screen">
            <h1 className="main-title">Hidden Joys</h1>
            <div>Search</div>
            <div className="buttons-container">
                <AddButton />
                <FoundButton />
            </div>
        </div>
        <Footer />
    </div>

export default HomeScreen;