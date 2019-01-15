import React from 'react';

const SearchPannel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fonsize: '20px'
    };

    return <input 
        style = {searchStyle}
        placeholder={searchText}></input>;
};

export default SearchPannel;