import React, { createContext, useContext, useReducer } from 'react';

import { readingListActionTypes } from '../utils/constants';


// actions and reducer
const initialState = {
    items: [],
    status: '',
    error: null,
};


const reducer = (state, action) => {
    switch (action.type) {
        case readingListActionTypes.FETCH:
            return { ...state, items: action.items, status: action.status, error: action.error };
        default:
            return state;
    }
};


// context
const ReadingContext = createContext();


export const ReadingProvider = ({ children }) =>
    <ReadingContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </ReadingContext.Provider>;


export const useReadingContext = () => useContext(ReadingContext);
