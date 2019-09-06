import React from 'react';
import styled from 'styled-components';


const StyledHeader = styled.div`
    align-items: center;
    display: flex;
    height: 48px;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 100%;
`;

const StyledHeaderContent = styled.div`
    font-size: 2em;
    font-weight: 700;
`;


const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" fill="#ffffff" />
    </svg>
);


export default () => (
    <StyledHeader>
        <StyledHeaderContent>BOOK<span style={{color: "#fcba03"}}>KEEPER</span></StyledHeaderContent>
        <MenuIcon />
    </StyledHeader>
);
