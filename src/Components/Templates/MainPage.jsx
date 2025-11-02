import { useEffect, useState } from "react";
import CoinChart from "../Modules/CoinChart";
import { getApi } from "../../Services/CryptoApi";
import Pagination from "../Modules/Pagination";
import SearchCurenncy from "../Modules/SearchCurenncy";

function MainPage() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [currency, setCurrency] = useState("usd");
  useEffect(() => {
    setIsLoading(true);
    const getDataApi = async () => {
      try {
        const res = await fetch(getApi(page, currency));
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getDataApi();
  }, [page, currency]);
  return (
    <div>
      <SearchCurenncy currency={currency} setCurrency={setCurrency} />
      <CoinChart coins={coins} isloading={isLoading} currency={currency} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default MainPage;
