import React from 'react';
import Header from './header';
import Footer from './footer';
import './stylesheets/about-screen.css';

let AboutScreen = () =>
    <div className='full-screen'>
        <Header />
            <div className='screen center-div success-image-background'>
                <div className='add-item-form'>
                    <div className='form-header center-div'>
                        <h3 className='form-title found-title'>About</h3>
                    </div>
                    <hr />
                    <div className='about-form-body'>
                        <div className='form-section'>
                            <p className='form-text'><span className='about-text-title'>Hidden Joys</span> was made for people who want to share a little piece of positivity in the world by creating a mini piece of art or a kind note/message and hiding it out there for someone else to find. </p>
                            <p className='form-text'>We believe in creating joy for others by lifting them up, putting a smile on their faces, and having a little fun in the process! <i class="far fa-laugh-beam"/></p>
                        </div>
                    </div>
                    <hr />
                    <div className='about-form-footer center-div'>
                        <p className='about-form-text'>Adding a bit of joy and whimsy to your day! <i className="far fa-smile-wink"/></p>
                    </div>
                </div>
            </div>
        <Footer />
    </div>

export default AboutScreen;