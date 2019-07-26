import React, { createContext, useContext, useReducer } from 'react';


const BookContext = createContext();

export const BookProvider = ({ reducer, initialState, children }) =>
    <BookContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </BookContext.Provider>;

export const useBookContext = () => useContext(BookContext);
