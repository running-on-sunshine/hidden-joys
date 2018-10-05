import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Footer from './footer';
import SearchBox from './map-screen/search-box';
import addItemFetch from './add-item-screen/add-item-fetch';

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

    render() {
        return (
            <div className="full-screen">
                <Header />
                <div>
                    <form onSubmit={event => {
                        event.preventDefault();
                        addItemFetch(this.state, this.props);
                    }}>
                        <div>
                            <p>Title</p>
                            <input 
                                type='text'
                                value={this.state.title}
                                onChange={event => {
                                    this.setState({title: event.target.value})
                                }}
                            />
                        </div>
                        <div>
                            <p>Location</p>
                            <select 
                                value={this.state.location}
                                onChange={event => {
                                    this.setState({location:event.target.value})
                                }}>
                                <option value='current'>Use Current Location</option>
                                <option value='search'>Search By Location</option>
                            </select>
                            {this.state.location === 'current' ? <p></p> : <SearchBox />}
                        </div>
                        <div>
                            <input type="file" />
                        </div>
                        <div>
                            <p>Description</p>
                            <textarea 
                                value={this.state.description}
                                onChange={event => {
                                    this.setState({description: event.target.value})
                                }}
                            />
                        </div>
                        <button type='submit'>Submit</button>
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