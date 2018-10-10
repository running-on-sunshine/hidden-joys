import React from 'react';
import Header from './header';
import Footer from './footer';
import './stylesheets/not-found.css';

let NotFoundScreen = () =>
    <div className="full-screen">
        <Header />
        <div className="screen not-found-image-background">
            <p className='not-found-title'>404: Not Found! <i className="far fa-frown"></i></p>
            <p className='not-found-text'>Sorry you didn't find what you were looking for.</p>
            <span className='little-dots'>...</span>
            <p className='not-found-text'>We hope we can make it up to you with this little starfish: <i className='fas fa-star little-star'></i></p>
        </div>
        <Footer />
    </div>

export default NotFoundScreen;