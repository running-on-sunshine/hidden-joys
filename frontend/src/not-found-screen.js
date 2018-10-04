import React from 'react';
import Header from './header';
import Footer from './footer';

let NotFoundScreen = () =>
    <div className="full-screen">
        <Header />
        <div className="screen">
            <h1>404: Not Found! :(</h1>
        </div>
        <Footer />
    </div>

export default NotFoundScreen;