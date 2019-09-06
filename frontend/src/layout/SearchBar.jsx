import React from 'react';
import styled from 'styled-components';

import { searchBook } from '../contexts/uiActions';
import { useUIContext } from '../contexts/uiContext';


const StyledInput = styled.input`
    background-color: transparent;
    border-color: #787878;
    border-width: 0px 0px 1px 0px;
    box-sizing: border-box;
    color: #787878;
    font: inherit;
    height: 40px;
    margin-bottom: 20px;
    width: 100%;

    :focus {
        outline: none;
    }
`;


const SearchBar = () => {
    const [uiState, uiDispatch] = useUIContext();

    const handleChange = evt => {
        uiDispatch(searchBook(evt.target.value));
    }

    return (
        <StyledInput onChange={handleChange} placeholder="search for book" />
    );
}


export default SearchBar;
