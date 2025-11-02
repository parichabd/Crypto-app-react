import { useEffect, useState } from "react";
import CoinChart from "../Modules/CoinChart";
import { getApi } from "../../Services/CryptoApi";
import Pagination from "../Modules/Pagination";
import SearchCurenncy from "../Modules/SearchCurenncy";
import Chart from "../Modules/Chart";

function MainPage() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [currency, setCurrency] = useState("usd");
  const [chart , setChart] =useState(null)
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
      <CoinChart coins={coins} isloading={isLoading} currency={currency} setChart={setChart}/>
      {!!chart && <Chart chart={chart} setChart={setChart}/> }
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default MainPage;
