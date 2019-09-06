import React, { useEffect } from 'react';

import { fetchBooks } from '../contexts/bookActions';
import { useBookContext } from '../contexts/bookContext';
import { fetchReadingLists } from '../contexts/readingActions';
import { useReadingContext } from '../contexts/readingContext';
import { useUIContext } from '../contexts/uiContext';
import { statuses } from '../utils/constants';

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

    if (!uiState || uiState.status === statuses.LOADING) {
        return <div>loading...</div>;
    }

    if (uiState.status === statuses.ERROR) {
        return <div>ERROR</div>;
    }

    return readingState.status === statuses.SUCCESS && <div>{readingState.items[0].name}, {uiState.searchText}</div>;
}


export default Dashboard;
