const MAIN_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "%20CG-zZb95cAYhBbTfZSFWb1NbszH";
function getApi(page, currency) {
  return `${MAIN_URL}/coins/markets?vs_currency=${currency}&category=layer-1&price_change_percentage=1h&per_page=20&page=${page}&x-cg-demo-api-key=${API_KEY}`;
}

function searchApi(query) {
  return `${MAIN_URL}/search?query=${query}&x-cg-demo-api-key=${API_KEY}`;
}
function chartApi(coin) {
  return `${MAIN_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`;
}
export { getApi, searchApi , chartApi };
