import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Footer from './footer';
import SearchBox from './map-screen/search-box';
import addItemFetch from './add-item-screen/add-item-fetch';
import './stylesheets/add-item-screen.css';

class AddItemScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            location:'current',
            image: 'https://unsplash.com/photos/_0aKQa9gr4s',
            description: ''
        }
    };

    componentDidMount() {
        this.props.dispatch({
            type: 'UPDATE_ITEM_ID',
            itemId: ''
        });
    };

    render() {
        let updateItemId = (id) => {
            this.props.dispatch({
                type: 'UPDATE_ITEM_ID',
                itemId: id
            });
            this.props.history.push(`/submit-success`);
        };

        return (
            <div className="full-screen">
                <Header />
                <div className='screen form-screen'>
                    <form 
                    className='add-item-form'
                    onSubmit={event => {
                        event.preventDefault();
                        addItemFetch(this.state, this.props, updateItemId);
                    }}>
                        <p className='form-title'>Hide New Item</p>
                        <div className='form-section'>
                            <p className='form-section-title'>Title</p>
                            <input 
                                className='input-box'
                                type='text'
                                required
                                value={this.state.title}
                                onChange={event => {
                                    this.setState({title: event.target.value})
                                }}
                            />
                        </div>
                        <div className='form-section'>
                            <p className='form-section-title'>Location</p>
                            <select 
                                className='input-box'
                                value={this.state.location}
                                onChange={event => {
                                    this.setState({location:event.target.value})
                                }}>
                                <option value='current'>Use Current Location</option>
                                <option value='search'>Search By Location</option>
                            </select>
                            {this.state.location === 'current' ? <p></p> : <SearchBox />}
                        </div>
                        <div className='form-section'>
                        <p className='form-section-title'>Image</p>
                            <input className='input-box' type="file" />
                        </div>
                        <div className='form-section'>
                            <p className='form-section-title'>Description</p>
                            <textarea 
                                className='input-box description-box'
                                value={this.state.description}
                                onChange={event => {
                                    this.setState({description: event.target.value})
                                }}
                            />
                        </div>
                        <div className='form-section'>
                            <button type='submit' className='form-button'>Submit</button>
                        </div>
                        
                    </form>
                </div>
                <Footer />
            </div>
        )
    };
};

export default connect(
    state => ({lat: state.lat, lng: state.lng})
)(AddItemScreen);