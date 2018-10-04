import React from 'react';
import Header from './header';
import Footer from './footer';

let AddItemScreen = () =>
    <div>
        <Header />
        <form>
            <p>Title</p>
            <p>Use current location or search by address</p>
            <p>Upload image</p>
            <p>Description/hints</p>
            <button type="submit">Submit</button>
        </form>
        <Footer />
    </div>

export default AddItemScreen;