import React from 'react';
import Header from './header';
import Footer from './footer';

let HomeScreen = () =>
    <div>
        <Header />
        <h1>Hidden Joys</h1>
        <div>Search</div>
        <button>Add</button>
        <button>Found</button>
        <Footer />
    </div>

export default HomeScreen;