import React from 'react';
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
            this.setState({id: ''});
            this.setState({message: 'Invalid id'});
        }

        return (
            <div className="full-screen">
                <Header />
                <div className="screen">
                    <form 
                        className="add-item-form"
                        onSubmit={event => {
                            event.preventDefault();
                            findItemFetch(this.state.id, invalidId);
                    }}>
                        <p className='form-title'>Did you find some joy? <i className="far fa-smile-wink"></i></p>
                        <p className='form-text'>Wooo! That's super awesome!</p>
                        <p className='form-text'>To mark your piece of joy as found, find the id attached to your joy and enter it below.</p>
                        <div className='form-section'>
                            <p className='form-section-title'>Enter joy id:</p>
                            <div className=''>
                                <input 
                                    className='input-box' 
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

export default FoundItemsScreen;