import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import ItemDescriptionButton from './item-description-button';
import './stylesheets/add-item-screen.css';

class SubmissionSuccessfulScreen extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div className="full-screen">
                <Header />
                <div className="screen form-screen success-image-background">
                    <div className='add-item-form'>
                        <p className='form-title'>Thank You!!!</p>
                        <div className='form-section'>
                            <p className='form-text'>Thank you very much for adding some joy into the world!</p>
                            <p className='form-text'>Your item id is:</p>
                            <div className='input-box id-box'>
                                <p className='id-text'>{this.props.itemId}</p>
                            </div>
                        </div>
                        <div className='form-section'>
                            <p className='form-text'>Please include this id when hiding your item of joy so that others can let us know when they have found the item!</p>
                            <ItemDescriptionButton id={this.props.itemId}/>
                        </div>
                        <div className='form-section'>
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