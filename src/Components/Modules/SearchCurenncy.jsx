import { useEffect, useState } from "react";
import { searchApi } from "../../Services/CryptoApi";

function SearchCurenncy({ currency, setCurrency }) {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);
  const symbols = {
    usd: "$",
    eur: "€",
    jpy: "¥",
  };

  useEffect(() => {
    const controller = new AbortController();
    if (!search) return;
    const apiSearch = async () => {
      try {
        const res = await fetch(searchApi(search) , {signal :controller.signal});
      const json = await res.json();
      console.log(json);
      if (json.coins) {setCoins(json.coins)}else{
        alert(json.status.error_message)
      };
      } catch (error) {
        if(error.name !== "AbortError")
          alert(error.message)
      }
      
    };

    apiSearch();
    return () => controller.abort()
  }, [search]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search coin..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JYN</option>
      </select>
      <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
        {symbols[currency]}
      </span>
    </div>
  );
}

export default SearchCurenncy;
