import { useEffect, useState } from "react";
import CoinChart from "../Modules/CoinChart";
import { getApi } from "../../Services/CryptoApi";

function MainPage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const getDataApi = async () => {
      const res = await fetch(getApi());
      const json = await res.json();
      setCoins(json);
    };
    getDataApi();
  }, []);
  return (
    <div>
      <p>mainPage</p>
      <CoinChart coins={coins} />
    </div>
  );
}

export default MainPage;
