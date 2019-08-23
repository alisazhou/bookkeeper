import React, { useEffect } from 'react';

import { useBookContext } from '../contexts/bookContext';


const Dashboard = () => {
    const [{ items, status }, dispatch] = useBookContext();

    useEffect(() => {
        if (items.length === 0) {
            fetch('/api/books/')
                .then(response => response.json())
                .then(data => dispatch({ type: 'receiveBooks', items: data, status: 'success' }))
                .catch(err => dispatch({ type: 'receiveBooks', status: 'failure' }))
        }
    });

    if (status === 'loading') {
        return <div>loading...</div>;
    }

    if (status === 'failure') {
        return <div>ERROR</div>;
    }

    return status === 'success' && <div>{items[0]['title']}</div>;
}


export default Dashboard;
