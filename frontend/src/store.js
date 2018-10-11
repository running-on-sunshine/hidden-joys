import { createStore } from 'redux';
import reducer from './reducer';

let initialState = {
    lat: 33.7490,
    lng: -84.3880,
    items:[],
    currentLocation: {lat:'',lng:''},
    itemId: '',
    foundCode: ''
};

let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;