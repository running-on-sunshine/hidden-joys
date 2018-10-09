import React from 'react';
import { connect } from 'react-redux';

let CurrentLocationButton = (props) => 
    <button 
        className='form-button'
        onClick={event => {
            event.preventDefault();
            navigator.geolocation.getCurrentPosition(position => {
                let pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                props.dispatch({
                    type: 'UPDATE_LOCATION',
                    location:{lat:pos.lat, lng:pos.lng}
                });
            });
        }
        }
    ><i className="fas fa-map-marker-alt"></i> Use Current Location</button>

export default connect(
    state => ({
        lat: state.lat,
        lng: state.lng,
        currentLocation: state.currentLocation
    })
)(CurrentLocationButton);