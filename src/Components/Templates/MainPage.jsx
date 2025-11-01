import { useEffect, useState } from "react";
import CoinChart from "../Modules/CoinChart";
import { getApi } from "../../Services/CryptoApi";

function MainPage() {
  const [coins, setCoins] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    const getDataApi = async () => {
      const res = await fetch(getApi());
      const json = await res.json();
      setCoins(json);
      setIsLoading(false)
    };
    getDataApi();
  }, []);
  return (
    <div>
      <CoinChart coins={coins} isloading={isLoading}/>
    </div>
  );
}

export default MainPage;
