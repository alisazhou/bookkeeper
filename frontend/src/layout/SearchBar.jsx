import React from 'react';
import styled from 'styled-components';

import { searchBook } from '../contexts/uiActions';
import { useUIContext } from '../contexts/uiContext';
import XIcon from '../icons/XIcon';
import { secondaryDark } from '../utils/constants';


const StyledWrapper = styled.div`
    align-items: center;
    border-bottom: 1px solid ${secondaryDark};
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;
`;

const StyledInput = styled.input`
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    color: ${secondaryDark};
    flex-basis: 95%;
    font: inherit;
    height: 40px;

    :focus {
        outline: none;
    }
`;


const SearchBar = () => {
    const [uiState, uiDispatch] = useUIContext();

    const handleChange = evt => {
        uiDispatch(searchBook(evt.target.value));
    };

    const clearText = () => {
        uiDispatch(searchBook(''));
    };

    return (
        <StyledWrapper>
            <StyledInput onChange={handleChange} placeholder="search for book" value={uiState.searchText} />
            {uiState.searchText && <XIcon handleClick={clearText} />}
        </StyledWrapper>
    );
}


export default SearchBar;
