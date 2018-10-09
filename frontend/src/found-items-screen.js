import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Footer from './footer';
import findItemFetch from './find-item-fetch';
import './stylesheets/found-items-screen.css';

class FoundItemsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id: '',
            message: ''
        }
    }

    render() {
        let invalidId = () => {
            this.setState({ id: '' });
            this.setState({ message: 'Invalid id' });
        };

        let clearMessage = () =>
            this.setState({ message: '' });

        let updateItemId = (id) => {
            this.props.dispatch({
                type: 'UPDATE_ITEM_ID',
                itemId: id
            });
            this.props.history.push(`/found-success`);
        };

        return (
            <div className="full-screen">
                <Header />
                <div className="screen found-items-image-background">
                    <form 
                        className="add-item-form"
                        onSubmit={event => {
                            event.preventDefault();
                            findItemFetch(this.state.id, invalidId, clearMessage, updateItemId);
                    }}>
                        <p className='form-title'>Did you find some joy? <i className="far fa-smile-wink"></i></p>
                        <p className='form-text'>Wooo! That's super awesome!</p>
                        <p className='form-text'>To mark your piece of joy as found, find the id attached to your joy and enter it below.</p>
                        <div className='form-section'>
                            <p className='form-section-title'>Enter joy id:</p>
                            <div className='search-id-form-section'>
                                <input 
                                    className='input-box id-box'
                                    type='text'
                                    value={this.state.id}
                                    onChange={event => {
                                        this.setState({id: event.target.value})
                                    }} 
                                />
                                <button 
                                    className='form-button search-items-button' 
                                    type="submit">Found!
                                </button>
                                <p>{this.state.message}</p>
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
)(FoundItemsScreen);