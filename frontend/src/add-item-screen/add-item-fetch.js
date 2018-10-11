import generateId from './generate-id';

let newItemBody = (state, lat, lng) => ({
    title: state.title,
    lat: lat,
    lng: lng,
    image: state.image,
    found_code: generateId(),
});

let fetchRequest = (body, hints, updateStoreIdAndFoundCode) => {
    fetch(`${process.env.REACT_APP_API_URL}/items`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(res => res.json())
    .then(data => {
        let itemId = data[0].id;
        let foundCode = data[0].found_code;
        let body = {itemId, hints};
        fetch(`${process.env.REACT_APP_API_URL}/hints`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(() => {
            updateStoreIdAndFoundCode(itemId, foundCode);
        })
    })
};

let addItemFetch = (state, props, updateStoreIdAndFoundCode) => {
    if (state.location === 'current') {
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            let body = newItemBody(state, lat, lng);
            fetchRequest(body, state.hints, updateStoreIdAndFoundCode);
        });
    } else {
        let body = newItemBody(state, props.lat, props.lng);
        fetchRequest(body, state.hints, updateStoreIdAndFoundCode);
    }
};

export default addItemFetch;