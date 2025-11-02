import { useEffect, useState } from "react";
import CoinChart from "../Modules/CoinChart";
import { getApi } from "../../Services/CryptoApi";
import Pagination from "../Modules/Pagination";

function MainPage() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true)
    const getDataApi = async () => {
      const res = await fetch(getApi(page));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };
    getDataApi();
  }, [page]);
  return (
    <div>
      <Pagination page={page} setPage={setPage}/>
      <CoinChart coins={coins} isloading={isLoading} />
    </div>
  );
}

export default MainPage;
