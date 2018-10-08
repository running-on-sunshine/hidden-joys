let foundItemFetch = (item) => {
    fetch(process.env.REACT_APP_API_URL + '/items/' + item.id, {
        method: 'PUT',
        body: JSON.stringify({ id: item.id, found: true }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(() => {
        console.log('Database has been updated!');
    }) 
};

export default foundItemFetch;