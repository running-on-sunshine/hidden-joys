import React from 'react';
import Header from './header';
import Footer from './footer';

let AboutScreen = () =>
    <div className="full-screen">
        <Header />
            <div className="screen">
                <p>About</p>
            </div>
        <Footer />
    </div>

export default AboutScreen;