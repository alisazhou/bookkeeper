const BOOK_LIST_API = '/api/books/';

import { bookActionTypes, statuses, uiActionTypes } from '../utils/constants';


export const fetchBooks = dispatch => {
    dispatch({ type: uiActionTypes.LOAD, status: statuses.LOADING });

    fetch(BOOK_LIST_API)
        .then(response => response.json())
        .then(data => {
            dispatch({ type: uiActionTypes.LOAD, status: statuses.SUCCESS });
            dispatch({ type: bookActionTypes.FETCH, status: statuses.SUCCESS, items: data });
        }).catch(err => {
            dispatch({ type: uiActionTypes.LOAD, status: statuses.FAILURE });
            dispatch({ type: bookActionTypes.FETCH, status: statuses.SUCCESS, error: err });
        });
};
