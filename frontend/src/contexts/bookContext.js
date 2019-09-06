import React, { createContext, useContext, useReducer } from 'react';

import { bookActionTypes } from '../utils/constants';


// actions and reducer
const initialState = {
    items: [],
    status: '',
    error: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case bookActionTypes.FETCH:
            return { ...state, items: action.items, status: action.status, error: action.error };
        default:
            return state;
    }
};


// context
const BookContext = createContext();

export const BookProvider = ({ children }) =>
    <BookContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </BookContext.Provider>;

export const useBookContext = () => useContext(BookContext);
