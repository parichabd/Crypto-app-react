import { useEffect, useState } from "react";
import CoinChart from "../Modules/CoinChart";
import { getApi } from "../../Services/CryptoApi";

function MainPage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(getApi())
      .then((res) => res.json())
      .then((json) => setCoins(json));
  }, []);
  return (
    <div>
      <p>mainPage</p>
      <CoinChart coins={coins} />
    </div>
  );
}

export default MainPage;
