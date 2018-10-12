import React from 'react';
import Header from './header';
import Footer from './footer';

let AboutScreen = () =>
    <div className='full-screen'>
        <Header />
            <div className='screen form-screen success-image-background'>
                <div className='add-item-form'>
                    <p className='form-title'>About</p>
                </div>
            </div>
        <Footer />
    </div>

export default AboutScreen;