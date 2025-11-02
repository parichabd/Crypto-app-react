function SearchCurenncy({ currency, setCurrency }) {
  const symbols = {
    usd: "$",
    eur: "€",
    jpy: "¥",
  };
  return (
    <div>
      <input type="text" placeholder="Search coin..." />
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
