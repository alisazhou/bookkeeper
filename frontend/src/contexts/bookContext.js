import React, { createContext, useContext, useReducer } from 'react';


// actions and reducer
const initialState = {
    items: [],
    status: 'loading',
    error: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'receiveBooks':
            return { ...state, items: action.items, status: action.status };
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
