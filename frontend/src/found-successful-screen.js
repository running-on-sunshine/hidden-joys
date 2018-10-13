import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import ItemDescriptionButton from './item-description-button';
import updateCommentFetch from './found-successful-screen/update-comment-fetch';
import './stylesheets/add-item-screen.css';

class FoundSuccessfulScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            commentSubmitted: false,
            itemAlreadyFound: false
        };
    };

    render() {
        let updateCommentSubmitted = () => 
            this.setState({ commentSubmitted: true });

        return (
            <div className="full-screen">
                <Header />
                <div className="screen form-screen success-image-background">
                    <form 
                        className='add-item-form'
                        onSubmit={event => {
                            event.preventDefault();
                            updateCommentFetch(this.state.comment, this.props.itemId, updateCommentSubmitted);
                        }}>
                        <p className='form-title'>Joy Found!!!</p>
                        <div className='form-section'>
                            <p className='form-text'>Yay! You found some joy! Thank you for being awesomely you! <i className="far fa-grin-beam" />
                            </p>
                        </div>
                        {this.state.commentSubmitted
                        ? <p className='found-comment-thank-you'>Thank you for sharing your thoughts!!!</p>
                        :<div className='form-section-change'>
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
                        </div>
                        }
                        <div className='form-section'>
                            <ItemDescriptionButton id={this.props.itemId}/>
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

export default connect(
    state => ({ itemId: state.itemId })
)(FoundSuccessfulScreen);