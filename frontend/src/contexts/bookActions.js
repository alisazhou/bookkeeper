const BOOK_LIST_API = '/api/books/';


export const fetchBooks = dispatch => {
    dispatch({ type: 'fetchBooks', status: 'loading' });

    fetch(BOOK_LIST_API)
        .then(response => response.json())
        .then(data => dispatch({ type: 'fetchBooks', status: 'success', items: data }))
        .catch(err => dispatch({ type: 'fetchBooks', status: 'failure', error: err }));
};
