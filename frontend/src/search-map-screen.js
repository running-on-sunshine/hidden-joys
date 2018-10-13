import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import SearchMapContainer from './map-screen/search-map-container';
import PlacesWithStandaloneSearchBox from './map-screen/search-box';
import CurrentLocationButton from './map-screen/current-location-button';
import FilterMapButtons from './map-screen/filter-map-buttons';
import './stylesheets/map-styling.css';

class SearchMapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {lat:this.props.lat, lng: this.props.lng}
        }
    };

    fetchRequest(route) {
        fetch(process.env.REACT_APP_API_URL + route)
        .then(res => res.json())
        .then(items => {
            this.props.dispatch({
                type: 'UPDATE_ITEMS',
                items: items.data
            })
        });
    }

    componentDidMount() {
        this.fetchRequest('/items')
    };

    render() {
        let fetchAllItems = () => this.fetchRequest('/items');
        let fetchHiddenItems = () => this.fetchRequest('/items/hidden');
        let fetchFoundItems = () => this.fetchRequest('/items/found');

        return (
            <div className="full-screen">
                <Header />
                <div className="screen center-div">
                    <div className='search-map-screen-container'>
                        <div className='desktop-map'>
                            <div className='search-map-container desktop-map-container'>
                                <SearchMapContainer
                                    location={ {lat: this.props.lat, lng: this.props.lng } }
                                    items={this.props.items}
                                />
                            </div>
                        </div>
                        <div className='search-map-screen-main'>
                            <div className='search-map-screen-container-section'>
                                <p className='map-screen-section-title'>Search By Location</p>
                                <div className='map-search-btns-container'>
                                    <CurrentLocationButton />
                                    <p className='separator-text'>OR</p>
                                    <div className='map-search-box-container'>
                                        <PlacesWithStandaloneSearchBox />
                                    </div>
                                </div>
                            </div>
                            <div className='search-map-screen-container-section'>
                                <p className='map-screen-section-title'>Filter By Items</p>
                                <FilterMapButtons 
                                    fetchAllItems={fetchAllItems}
                                    fetchHiddenItems={fetchHiddenItems}
                                    fetchFoundItems={fetchFoundItems}
                                />
                            </div>
                            <div className='search-map-screen-container-section map-section'>
                                <div className='search-map-container'>
                                    <SearchMapContainer
                                        location={ {lat: this.props.lat, lng: this.props.lng } }
                                        items={this.props.items}
                                    />
                                </div>
                            </div>
                            <div className='search-map-screen-container-section'>
                                <div className='form-btns-container'>
                                    <Link to='/add'><button className='search-form-button'>Add Joy</button></Link>
                                    <Link to='/found'><button className='search-form-button'>Found Joy</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
};

export default connect(
    state => ({lat: state.lat, lng: state.lng, items: state.items})
)(SearchMapScreen);