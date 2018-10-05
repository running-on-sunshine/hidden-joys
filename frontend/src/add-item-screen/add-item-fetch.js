import generateId from './generate-id';

let buildBody = (state, lat, lng) => ({
    id: generateId(),
    title: state.title,
    lat: lat,
    lng: lng,
    image: state.image,
    description: state.description
})

let fetchRequest = (body) => {
    fetch(process.env.REACT_APP_API_URL + '/items', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(() => {
        console.log('Check database to confirm entry')
    })
};

let addItemFetch = (state, props) => {
    if (state.location === 'current') {
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            let body = buildBody(state, lat, lng);
            fetchRequest(body);
        });
    } else {
        let body = buildBody(state, props.lat, props.lng);
        fetchRequest(body);
    }
};

export default addItemFetch;