let updateLocation = (oldState, action) => {
    let lat = action.location.lat;
    let lng = action.location.lng;
    return {...oldState, lat, lng}
}

let reducers = {
    'UPDATE_LOCATION': updateLocation,
};

let reducer = (oldState, action) => {
    let doer = reducers[action.type];
    return doer ? doer(oldState, action) : oldState;
}

export default reducer;