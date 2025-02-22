import React from "react";
import "../cryptoTable.css";

const SearchBar = ({ onSearch }) => {
    return (
        <input
            type="text"
            placeholder="Search By Name or Symbol"
            onChange={(e) => onSearch(e.target.value)}
            className="search-bar"
        />
    );
};

export default SearchBar;
