import generateId from './generate-id';



let newItemBody = (state, lat, lng) => ({
    title: state.title,
    lat: lat,
    lng: lng,
    image: state.image,
    found_code: generateId(),
    // hints: state.hints
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
        let itemId = data[0].id;  // need to get back the newly created item so we can get its id
        let body = {itemId, hints};
        console.log(body);
        fetch(`${process.env.REACT_APP_API_URL}/hints`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(() => {
            console.log('check Database')
        })
        
        // need to insert the hints into database
        // /items/:id/hints
        // console.log(data[0].id); // this is the id after entering into database
        // updateStoreIdAndFoundCode(body.id); // this should get the found_code and store it in global store
        // updateStoreIdAndFoundCode(id, code);
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

// INSERT INTO items (title, lat, lng, image, found_code)
// VALUES ('Buckhead Station', 33.849623, -84.370207, 'https://source.unsplash.com/fH_Oag_bA1c/', 'zpq8965k3j');

// let fetchRequest = (body, updateItemId) => {
//     fetch(process.env.REACT_APP_API_URL + '/items', {
//         method: 'POST',
//         body: JSON.stringify(body),
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         }
//     })
//     .then(() => {
//         console.log('Check database to confirm entry');
//         updateItemId(body.id);
//     })
// };

// let addItemFetch = (state, props, updateItemId) => {
//     if (state.location === 'current') {
//         navigator.geolocation.getCurrentPosition(position => {
//             let lat = position.coords.latitude;
//             let lng = position.coords.longitude;
//             let body = buildBody(state, lat, lng);
//             fetchRequest(body, updateItemId);
//         });
//     } else {
//         let body = buildBody(state, props.lat, props.lng);
//         fetchRequest(body, updateItemId);
//     }
// };

// export default addItemFetch;