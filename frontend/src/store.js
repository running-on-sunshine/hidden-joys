import { createStore } from 'redux';
import reducer from './reducer';

let initialState = {
    lat:33.848992,
    lng: -84.373203,
    items:[],
    currentLocation: {lat:'',lng:''},
    itemId: ''
};

let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;