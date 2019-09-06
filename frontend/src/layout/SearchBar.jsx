import React from 'react';

import { searchBook } from '../contexts/uiActions';
import { useUIContext } from '../contexts/uiContext';


const SearchBar = () => {
    const [uiState, uiDispatch] = useUIContext();

    const handleChange = evt => {
        uiDispatch(searchBook(evt.target.value));
    }

    return (
        <input onChange={handleChange} />
    );
}


export default SearchBar;
