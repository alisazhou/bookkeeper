import React, { useEffect } from 'react';

import { BookProvider } from './contexts/bookContext';

import ReadingListsDashboard from './readingLists/ReadingListsDashboard';


const App = () => {
    const initialState = {
        books: [],
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'receiveBooks':
                return { ...state, books: action.books };
            default:
                return state;
        }
    };

    return (
        <BookProvider initialState={initialState} reducer={reducer}>
            <ReadingListsDashboard />
        </BookProvider>
    );
};


export default App;
