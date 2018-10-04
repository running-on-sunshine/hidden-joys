# Hidden Joys  


## Features  
- GOOGLE MAPS
    - User can search for a specific location or use their current location to set the center of the map.

## Challenges  
- Using the Google Maps API with a React application  
    - The first challenge encountered with using the Google Maps API was figuring out how to display the map on the screen. The documentation on the Google Maps Platfrom page show how to add a map to your site using HTML and vanilla JavaScript. Since, our application is built with React, we needed to find another way to implement the api.  The solution we found to this was to install the react-google-maps library. The git repo for this library can be found at github.com/tomchentw/react-google-maps. The readme links to documentation on how to use the library.
    
    - Another problem encountered when dealing with Google Maps was creating a search box that is populated using the Google Places library. We ended up using the example for StandAloneSearchBox that was in the react-google-maps documentation. In order to use this code we had to install the recompose library which is described as 'A React utility belt for function components and higher-order components.' We also added the following code which takes the latitdue and longitude coordinates from the location and updates the global store.
    ```
        let lat = this.state.places[0].geometry.location.lat();
        let lng = this.state.places[0].geometry.location.lng();
        this.props.dispatch({
            type: 'UPDATE_LOCATION',
            location:{lat,lng}
        })
    ```