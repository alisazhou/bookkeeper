import React from 'react';

import { BookProvider } from './contexts/bookContext';
import { ReadingProvider } from './contexts/readingContext';
import { UIProvider } from './contexts/uiContext';

import Layout from './layout/Layout';


const App = () => {
    return (
        <ReadingProvider>
            <BookProvider>
                <UIProvider>
                    <Layout />
                </UIProvider>
            </BookProvider>
        </ReadingProvider>
    );
};


export default App;
