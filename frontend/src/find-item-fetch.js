import foundItemFetch from './found-item-fetch';

let findItemFetch = (id, invalidId, clearMessage, updateItemId) => {
    fetch(process.env.REACT_APP_API_URL + '/items/' + id)
    .then(res => res.json())
    .then(data => {
        if (data.data === 'Error') {
            invalidId();
        }
        else {
            clearMessage();
            foundItemFetch(data.data, updateItemId);
        }
    });
};

export default findItemFetch;