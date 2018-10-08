import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import './stylesheets/add-item-screen.css';

class FoundSuccessfulScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
    };

    render() {
        return (
            <div className="full-screen">
                <Header />
                <div className="screen form-screen success-image-background">
                    <form 
                        className='add-item-form'
                        onSubmit={event => {
                            event.preventDefault();
                            // addCommentFetch();
                        }}>
                        <p className='form-title'>Joy Found!!!</p>
                        <div className='form-section'>
                            <p className='form-text'>Yay! You found some joy! Thank you for being awesomely you! <i className="far fa-grin-beam" />
                            </p>
                        </div>
                        <div className='form-section'>
                            <p className='form-section-title'>Share your story! (Optional)</p>
                            <textarea 
                                className='input-box description-box'
                                placeholder=''
                                value={this.state.comment}
                                onChange={event => {
                                    this.setState({comment: event.target.value})
                                }} 
                            />
                        </div>
                        <div className='form-section'>
                            <button type='submit' className='form-button'>Submit</button>
                        </div>
                        <div className='form-section'>
                            <div className='form-btns-container'>
                                <Link to='/add'><button className='form-button'>Add Joy</button></Link>
                                <Link to='/search'><button className='form-button'>Find Joy</button></Link>
                            </div>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    };
};

export default FoundSuccessfulScreen;