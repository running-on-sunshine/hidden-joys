let foundItemFetch = (item, updateItemId) => {
    fetch(`${process.env.REACT_APP_API_URL}/items/${item.id}/found`, {
        method: 'PUT',
        body: JSON.stringify({ id: item.id, found: true }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(() => {
        updateItemId(item.id);
    }) 
};

export default foundItemFetch;