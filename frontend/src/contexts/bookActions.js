const BOOK_LIST_API = '/api/books/';


export const fetchBooks = dispatch => {
    dispatch({ type: 'load', status: 'loading' });

    fetch(BOOK_LIST_API)
        .then(response => response.json())
        .then(data => {
            dispatch({ type: 'load', status: 'success' });
            dispatch({ type: 'fetchBooks', status: 'success', items: data });
        }).catch(err => {
            dispatch({ type: 'load', status: 'failure' });
            dispatch({ type: 'fetchBooks', status: 'success', error: err });
        });
};
