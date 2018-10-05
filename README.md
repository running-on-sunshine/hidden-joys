# Hidden Joys  


## Technologies Used  
- HTML, CSS, JavaScript, Node.js, Express, React, Redux, Google Maps API
- Libraries:  
    - body-parser, cors, react-dom, react-google-maps, react-redux, react-router-dom, recompose, 

## Features  
- Adding new Items  
    - When users have hidden an item for others to find they fill out a form that includes a title, location, image, and description. For the location, the user can either use their current location or they can select one from the search box. The description field is where the user can enter hints to help other people find that item.
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