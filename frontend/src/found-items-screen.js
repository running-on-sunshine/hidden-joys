import React from 'react';
import Header from './header';
import Footer from './footer';

let FoundItemsScreen = () =>
    <div>
        <Header />
        <form>
            <p>Search by item id</p>
            <button type="submit">Submit</button>
        </form>
        <Footer />
    </div>

export default FoundItemsScreen;