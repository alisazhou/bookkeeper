const READING_LIST_API = '/api/readings/';


export const fetchReadingLists = dispatch => {
    dispatch({ type: 'load', status: 'loading' });

    fetch(READING_LIST_API)
        .then(response => response.json())
        .then(data => {
            dispatch({ type: 'load', status: 'success' });
            dispatch({ type: 'fetchReadingLists', status: 'success', items: data });
        }).catch(err => {
            dispatch({ type: 'load', status: 'failure' });
            dispatch({ type: 'fetchReadingLists', status: 'failure', error: err });
        });
};
