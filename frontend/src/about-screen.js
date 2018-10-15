import React from 'react';
import Header from './header';
import Footer from './footer';

let AboutScreen = () =>
    <div className='full-screen'>
        <Header />
            <div className='screen center-div success-image-background'>
                <div className='add-item-form'>
                    <h3 className='form-title found-title'>About</h3>
                    <div className='form-section'>
                        <p className='form-text'>Hidden Joys was made for people who want to share a little piece of positivity in the world, brighten someone’s day with a kind message/note or a little piece of art. </p>
                    </div>
                    <div className='form-section'>
                        <h4 className='form-section-title'>How to Create Joy!</h4>
                        
                    </div>
                </div>
            </div>
        <Footer />
    </div>

export default AboutScreen;