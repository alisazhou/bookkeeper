import React from 'react';

import { BookProvider } from './contexts/bookContext';

import ReadingListsDashboard from './readingLists/ReadingListsDashboard';


const App = () => {
    return (
        <BookProvider>
            <ReadingListsDashboard />
        </BookProvider>
    );
};


export default App;
