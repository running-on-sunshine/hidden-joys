import React from 'react';
import Header from './header';
import Footer from './footer';
import './stylesheets/found-items-screen.css';

let FoundItemsScreen = () =>
    <div className="full-screen">
        <Header />
        <div className="screen">
            <form 
            className="add-item-form"
            onSubmit={event => {
                event.preventDefault();
            }}>
                <p className='form-title'>Did you find some joy? <i className="far fa-smile-wink"></i></p>
                <p className='form-text'>Wooo! That's super awesome!</p>
                <p className='form-text'>To mark your piece of joy as found, find the id attached to your joy and enter it below.</p>
                <div className='form-section'>
                    <p className='form-section-title'>Enter joy id:</p>
                    <input className='input-box' type='search'></input>
                    <button className='search-items-button' type="submit">
                        <i className="fas fa-chevron-circle-right"></i>
                    </button>
                </div>
            </form>
        </div>
        <Footer />
    </div>

export default FoundItemsScreen;