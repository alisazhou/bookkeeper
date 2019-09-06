import React from 'react';

import styled from 'styled-components';

import NavigationHeader from './NavigationHeader';
import ReadingListsDashboard from '../readingLists/ReadingListsDashboard'


const StyledLayout = styled.div`
    box-sizing: border-box;
    height: 100vh;
    padding: 10px;
`;

const Layout = () => (
    <StyledLayout>
        <NavigationHeader />
        <ReadingListsDashboard />
    </StyledLayout>
);

export default Layout;
