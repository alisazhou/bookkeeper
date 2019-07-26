import React from 'react';

import { useBookContext } from '../contexts/bookContext';


const Dashboard = () => {
    const [{ books }, dispatch] = useBookValue();

    return <div>{books}</div>;
}


export default Dashboard;
