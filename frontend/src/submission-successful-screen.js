import React from 'react';
import Header from './header';
import Footer from './footer';

let SubmissionSuccessfulScreen = () =>
    <div className="full-screen">
        <Header />
        <div className="screen">
            <p>Thank you for your submission!</p>
        </div>
        <Footer />
    </div>

export default SubmissionSuccessfulScreen;