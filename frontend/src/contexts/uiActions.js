import { uiActionTypes } from '../utils/constants';


export const load = status => ({
    type: uiActionTypes.LOAD,
    status,
});


export const searchBook = text => ({
    type: uiActionTypes.SEARCH_BOOK,
    text,
});
