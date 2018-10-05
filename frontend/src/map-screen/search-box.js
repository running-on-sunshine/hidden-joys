import React from "react";
import { connect } from 'react-redux';
import { withScriptjs } from "react-google-maps";
import { compose, withProps, lifecycle } from 'recompose';
import keys from '../keys';
import { StandaloneSearchBox } from "react-google-maps/lib/components/places/StandaloneSearchBox";

const PlacesWithStandaloneSearchBox = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${keys.GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {}
      this.setState({
        places:[],
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          this.setState({
            places,
          });
          let lat = this.state.places[0].geometry.location.lat();
          let lng = this.state.places[0].geometry.location.lng();
          this.props.dispatch({
            type: 'UPDATE_LOCATION',
            location:{lat,lng}
          })
        },
      })
    },
  }),
  withScriptjs
)(props => 
  <div data-standalone-searchbox="" className="search-box-container">
    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input className='search-box home-search-box'
        type="text"
        placeholder="Search Map"
      />
    </StandaloneSearchBox>
  </div>
);

export default connect(
  state => ({lat:state.lat, lng:state.lng})
)(PlacesWithStandaloneSearchBox);