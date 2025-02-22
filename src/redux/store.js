import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./reducers";

const store = configureStore({
    reducer: cryptoReducer,
})

export default store;
