import React, { useEffect } from 'react';

import { fetchBooks } from '../contexts/bookActions';
import { useBookContext } from '../contexts/bookContext';
import { fetchReadingLists } from '../contexts/readingActions';
import { useReadingContext } from '../contexts/readingContext';
import { useUIContext } from '../contexts/uiContext';

import Layout from '../layout/Layout';


const Dashboard = () => {
    const [bookState, bookDispatch] = useBookContext();
    const [readingState, readingDispatch] = useReadingContext();
    const [uiState, _] = useUIContext();

    useEffect(() => {
        if (!bookState.status) {
            fetchBooks(bookDispatch);
        }
        if (!readingState.status) {
            fetchReadingLists(readingDispatch);
        }
    });

    if (bookState.status === 'loading') {
        return <div>loading...</div>;
    }

    if (bookState.status === 'failure') {
        return <div>ERROR</div>;
    }

    return readingState.status === 'success' && <div>{readingState.items[0].name}, {uiState.searchText}</div>;
}


export default Dashboard;
