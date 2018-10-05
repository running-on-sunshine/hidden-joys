import React from 'react';
import Header from './header';
import Footer from './footer';

let FoundItemsScreen = () =>
    <div className="full-screen">
        <Header />
        <div className="screen">
            <form>
                <p>Search by item id</p>
                <button type="submit">Submit</button>
            </form>
        </div>
        <Footer />
    </div>

export default FoundItemsScreen;