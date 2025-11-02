import { useEffect, useState } from "react";
import { searchApi } from "../../Services/CryptoApi";
import { FadeLoader } from "react-spinners";
import styles from "./searchCurrency.module.css";

function SearchCurenncy({ currency, setCurrency }) {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const symbols = {
    usd: "$",
    eur: "€",
    jpy: "¥",
  };

  useEffect(() => {
    const controller = new AbortController();
    setCoins([]);
    if (!search) {
      setIsLoading(false);
      return;
    }
    const apiSearch = async () => {
      try {
        const res = await fetch(searchApi(search), {
          signal: controller.signal,
        });
        const json = await res.json();
        console.log(json);
        if (json.coins) {
          setIsLoading(false);
          setCoins(json.coins);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name !== "AbortError") alert(error.message);
      }
    };
    setIsLoading(true);
    apiSearch();
    return () => controller.abort();
  }, [search]);
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search coin..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select className={styles.selectBox} value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JYN</option>
      </select>
      <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
        {symbols[currency]}
      </span>
      {(!!coins.length || isLoading) && (
        <div className={styles.searchResault}>
          {isLoading && <FadeLoader color="#3587c9" size={5} />}
          <ul>
            {coins.map((coin) => (
              <li key={coin.id}>
                <img src={coin.thumb} alt={coin.name} />
                <p>{coin.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchCurenncy;
