import React, { createContext, useContext, useReducer } from 'react';

import { statuses, uiActionTypes } from '../utils/constants';


// actions and reducer
const initialState = {
    loadingStatus: statuses.LOADING,
    searchText: '',
};


const reducer = (state, action) => {
    switch (action.type) {
        case uiActionTypes.LOAD:
            return { ...state, loadingStatus: action.status };
        case uiActionTypes.SEARCH_BOOK:
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
