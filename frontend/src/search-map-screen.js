import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import SearchMapContainer from './map-screen/search-map-container';
import PlacesWithStandaloneSearchBox from './map-screen/search-box';
import CurrentLocationButton from './map-screen/current-location-button';
import './stylesheets/map-styling.css';

class SearchMapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: this.props.lat,
            lng: this.props.lng
        }
    };

    componentDidMount() {
        // Get All Items from Database and add them to global store
        fetch(process.env.REACT_APP_API_URL + '/items')
        .then(res => res.json())
        .then(items => {
            this.props.dispatch({
                type: 'UPDATE_ITEMS',
                items: items.data
            })
        });
    };

    render() {
        return (
            <div className="full-screen">
                <Header />
                <div className="screen">
                    <div className='search-input-container'>
                        <CurrentLocationButton />
                        <PlacesWithStandaloneSearchBox />
                    </div>
                    <div className='map-container'>
                        <SearchMapContainer 
                            location={ {lat: this.state.lat, lng: this.state.lng} }
                        />
                    </div>
                    <div className='form-btns-container'>
                        <Link to='/add'><button className='form-button'>Add Joy</button></Link>
                        <Link to='/search'><button className='form-button'>Find Joy</button></Link>
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