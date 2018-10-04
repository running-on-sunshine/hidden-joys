import React from 'react';
import Header from './header';
import Footer from './footer';

let FoundSuccessfulScreen = () =>
    <div className="full-screen">
        <Header />
        <div className="screen">
            <p>Yay! You found an item!</p>
        </div>
        <Footer />
    </div>

export default FoundSuccessfulScreen;