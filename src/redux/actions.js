export const FETCH_CRYPTO_DATA = "FETCH_CRYPTO_DATA";

export const fetchCryptoData = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    );
    const data = await response.json();
    dispatch({ type: FETCH_CRYPTO_DATA, payload: data });
  } catch (error) {
    console.error("Error fetching crypto data:", error);
  }
};
