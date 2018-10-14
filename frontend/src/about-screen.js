import React from 'react';
import Header from './header';
import Footer from './footer';

let AboutScreen = () =>
    <div className='full-screen'>
        <Header />
            <div className='screen center-div success-image-background'>
                <div className='add-item-form'>
                    <p className='form-title found-title'>About</p>
                </div>
            </div>
        <Footer />
    </div>

export default AboutScreen;