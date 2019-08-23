import React, { useEffect } from 'react';

import { fetchBooks } from '../contexts/bookActions';
import { useBookContext } from '../contexts/bookContext';

import Layout from '../layout/Layout';


const Dashboard = () => {
    const [{ items, status }, dispatch] = useBookContext();

    useEffect(() => {
        if (!status) {
            fetchBooks(dispatch);
        }
    });

    if (status === 'loading') {
        return <div>loading...</div>;
    }

    if (status === 'failure') {
        return <div>ERROR</div>;
    }

    return status === 'success' && <div>{items[0].title}</div>;
}


export default Dashboard;
