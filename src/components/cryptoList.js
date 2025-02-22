import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCryptoData } from "../redux/actions";
import SearchBar from "./searchBar";
import SortButtons from "./sortButtons";
import "../cryptoTable.css";

const CryptoList = () => {
    const dispatch = useDispatch();
    const cryptoData = useSelector((state) => state.data);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        dispatch(fetchCryptoData());
    }, [dispatch]);

    useEffect(() => {
        setFilteredData(cryptoData);
    }, [cryptoData]);

    const handleSearch = (query) => {
        setFilteredData(
            cryptoData.filter((coin) =>
                coin.name.toLowerCase().includes(query.toLowerCase()) ||
                coin.symbol.toLowerCase().includes(query.toLowerCase())
            )
        );
    };

    const sortByMarketCap = () => {
        setFilteredData([...filteredData].sort((a, b) => b.market_cap - a.market_cap));
    };

    const sortByChange = () => {
        setFilteredData([...filteredData].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h));
    };

    return (
        <div className="crypto-container">
            <div className="controls">
                <SearchBar onSearch={handleSearch} />
                <SortButtons sortByMarketCap={sortByMarketCap} sortByChange={sortByChange} />
            </div>

            {filteredData.map((coin) => (
                <div key={coin.id} className="crypto-row">
                    <img src={coin.image} alt={coin.name} className="crypto-icon" />
                    <span>{coin.name} ({coin.symbol.toUpperCase()})</span>
                    <span>${coin.current_price}</span>
                    <span>${coin.total_volume.toLocaleString()}</span>
                    <span style={{ color: coin.price_change_percentage_24h > 0 ? "green" : "red" }}>
                        {coin.price_change_percentage_24h.toFixed(2)}%
                    </span>
                    <span> Mkt Cap: ${coin.market_cap.toLocaleString()}</span>
                </div>
            ))}
        </div>
    );

};

export default CryptoList;
