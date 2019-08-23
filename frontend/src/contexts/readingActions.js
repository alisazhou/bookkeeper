const READING_LIST_API = '/api/readings/';


export const fetchReadingLists = dispatch => {
    dispatch({ type: 'fetchReadingLists', status: 'loading' });

    fetch(READING_LIST_API)
        .then(response => response.json())
        .then(data => dispatch({ type: 'fetchReadingLists', status: 'success', items: data }))
        .catch(err => dispatch({ type: 'fetchReadingLists', status: 'failure', error: err }));
};
