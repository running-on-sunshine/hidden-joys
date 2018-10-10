let updateCommentFetch = (comment, id, updateCommentSubmitted) =>
    fetch(process.env.REACT_APP_API_URL + '/items/' + id + '/comment', {
        method: 'PUT',
        body: JSON.stringify({ id: id, comment: comment }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(() => updateCommentSubmitted())

export default updateCommentFetch;