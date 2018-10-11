import foundItemFetch from './found-item-fetch';

let findItemFetch = (foundCode, invalidFoundCode, clearMessage, updateItemId, itemAlreadyFound) => {
    fetch(`${process.env.REACT_APP_API_URL}/codes/${foundCode}`)
    .then(res => res.json())
    .then(data => {
        if (data.data === 'Error') {
            invalidFoundCode();
        }
        else {
            clearMessage();
            data.data.item_found 
            ? itemAlreadyFound(data.data.id)
            : foundItemFetch(data.data, updateItemId);
        }
    });
};

export default findItemFetch;