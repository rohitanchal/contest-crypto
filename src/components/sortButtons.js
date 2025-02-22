import React from "react";
import "../cryptoTable.css";

const SortButtons = ({ sortByMarketCap, sortByChange }) => {
    return (
        <div className="sort-buttons">
            <button onClick={sortByMarketCap} className="sort-button">Sort By Mkt Cap</button>
            <button onClick={sortByChange} className="sort-button">Sort by percentage</button>
        </div>
    );
};

export default SortButtons;
