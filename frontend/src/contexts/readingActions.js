const READING_LIST_API = '/api/readings/';

import { readingListActionTypes, statuses, uiActionTypes } from '../utils/constants';


export const fetchReadingLists = dispatch => {
    dispatch({ type: uiActionTypes.LOAD, status: statuses.LOADING });

    fetch(READING_LIST_API)
        .then(response => response.json())
        .then(data => {
            dispatch({ type: uiActionTypes.LOAD, status: statuses.SUCCESS });
            dispatch({ type: readingListActionTypes.FETCH, status: statuses.SUCCESS, items: data });
        }).catch(err => {
            dispatch({ type: uiActionTypes.LOAD, status: statuses.FAILURE });
            dispatch({ type: readingListActionTypes.FETCH, status: statuses.FAILURE, error: err });
        });
};
