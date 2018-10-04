import React from 'react';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';

let HomeScreen = () =>
    <div>
        <Header />
        <h1>Hidden Joys</h1>
        <div>Search</div>
        <Link to="/add">
            <button>Add</button>
        </Link>
        <Link to="/found">
            <button>Found</button>
        </Link>
        <Footer />
    </div>

export default HomeScreen;