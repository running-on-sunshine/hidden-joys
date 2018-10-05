import React from 'react';
import Header from './header';
import Footer from './footer';

let ItemDetailsScreen = () =>
    <div className="full-screen">
        <Header />
        <div className="screen">
            <h3>Title</h3>
            <p>Item Location</p>
            <p>Image</p>
            <p>Description/hints</p>
        </div>
        <Footer />
    </div>

export default ItemDetailsScreen;