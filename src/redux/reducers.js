import { FETCH_CRYPTO_DATA } from "./actions";

const initialState = {
  data: [],
};

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CRYPTO_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default cryptoReducer;
