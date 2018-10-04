import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Footer from './footer';
import SearchBox from './map-screen/search-box';

class AddItemScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            location:'current',
            description: ''
        }
    };

    render() {
        return (
            <div className="full-screen">
                <Header />
                <div>
                    <form>
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
                                {/* this.props.lat & this.props.lng */}
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