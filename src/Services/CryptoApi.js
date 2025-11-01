const MAIN_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "%20CG-zZb95cAYhBbTfZSFWb1NbszH";
function getApi() {
  return `${MAIN_URL}/coins/markets?vs_currency=usd&category=layer-1&price_change_percentage=1h&per_page=20&page=1&x-cg-demo-api-key:${API_KEY}`;
}

export { getApi };
