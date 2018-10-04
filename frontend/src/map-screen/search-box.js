import React from "react";
import { connect } from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
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
  <div data-standalone-searchbox="">
    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input 
        type="text"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </StandaloneSearchBox>
  </div>
);

export default connect(
  state => ({lat:state.lat, lng:state.lng})
)(PlacesWithStandaloneSearchBox);