import React from 'react';

import { BookProvider } from './contexts/bookContext';

import Layout from './layout/Layout';


const App = () => {
    return (
        <BookProvider>
            <Layout />
        </BookProvider>
    );
};


export default App;
