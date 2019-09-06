import React, { createContext, useContext, useReducer } from 'react';


// actions and reducer
const initialState = {
    searchText: '',
};


const reducer = (state, action) => {
    switch (action.type) {
        case 'searchBook':
            return { ...state, searchText: action.text };
        default:
            return state;
    }
};


// context
const UIContext = createContext();

export const UIProvider = ({ children }) =>
    <UIContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </UIContext.Provider>;

export const useUIContext = () => useContext(UIContext);
