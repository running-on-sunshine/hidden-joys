let updateLocation = (oldState, action) => {
    let lat = action.location.lat;
    let lng = action.location.lng;
    return {...oldState, lat, lng}
};

let updateItemId = (oldState, action) => ({...oldState, itemId: action.itemId});

let updateItems = (oldState, action) => ({...oldState, items: action.items});

let reducers = {
    'UPDATE_LOCATION': updateLocation,
    'UPDATE_ITEM_ID': updateItemId,
    'UPDATE_ITEMS': updateItems
};

let reducer = (oldState, action) => {
    let doer = reducers[action.type];
    return doer ? doer(oldState, action) : oldState;
}

export default reducer;