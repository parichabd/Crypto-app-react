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
    if (!search) return;
    const apiSearch = async () => {
      const res = await fetch(searchApi(search));
      const json = await res.json();
      if (json.coins) setCoins(json.coins);
    };

    apiSearch();
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
