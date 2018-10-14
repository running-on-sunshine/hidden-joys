import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import ItemDescriptionButton from './item-description-button';
import './stylesheets/add-item-screen.css';

class SubmissionSuccessfulScreen extends React.Component {
    render() {
        return (
            <div className="full-screen">
                <Header />
                <div className="screen center-div success-image-background">
                    <div className='add-item-form'>
                        <div className='form-header center-div'>
                            <p className='form-title'>Thank You!!!</p>
                        </div>
                        <div className='form-body thank-you-body'>
                            <div className='form-section'>
                                <p className='form-text'>Thank you very much for adding some joy into the world!</p>  
                            </div>
                            <div className='form-section'>
                                <p className='form-text'>Your item id is:</p>
                                    <div className='input-box id-box'>
                                        <p className='id-text'>{this.props.foundCode}</p>
                                    </div>
                                </div>
                            <div className='form-section'>
                                <p className='form-text'>Please include this id when hiding your item of joy so that others can let us know when they have found the item!</p>
                            </div>
                            <div className='form-section'>
                                <ItemDescriptionButton id={this.props.itemId}/>
                            </div>
                        </div>
                        <div className='form-footer center-div'>
                            <div className='form-btns-container'>
                                <Link to='/add'><button className='form-button'>Add Joy</button></Link>
                                <Link to='/search'><button className='form-button'>Find Joy</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    };
};  

export default connect(
    state => ({itemId: state.itemId, foundCode: state.foundCode})
)(SubmissionSuccessfulScreen);