import { useEffect, useState } from "react";
import CoinChart from "../Modules/CoinChart";

function MainPage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=layer-1&price_change_percentage=1h&per_page=20&page=1&x-cg-demo-api-key:%20CG-zZb95cAYhBbTfZSFWb1NbszH"
    )
      .then((res) => res.json())
      .then((json) => setCoins(json));
  }, []);
  return (
    <div>
      <p>mainPage</p>
      <CoinChart coins={coins}/>
    </div>
  );
}

export default MainPage;
