import React from 'react';

import { BookProvider } from './contexts/bookContext';
import { ReadingProvider } from './contexts/readingContext';

import Layout from './layout/Layout';


const App = () => {
    return (
        <ReadingProvider>
            <BookProvider>
                <Layout />
            </BookProvider>
        </ReadingProvider>
    );
};


export default App;
