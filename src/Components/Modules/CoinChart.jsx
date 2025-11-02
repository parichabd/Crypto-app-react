import {PropagateLoader} from "react-spinners"

import chartDown from "../../assets/chart-down.svg";
import chartUp from "../../assets/chart-up.svg";

import styles from "./coinChart.module.css"
function CoinChart({ coins, isloading , currency}) {
  return (
    <div className={styles.container}>
      {isloading ? (
        <PropagateLoader color="#3587c9" size={11}/>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id}  currency={currency} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CoinChart;

const TableRow = ({
  coin: {
    image,
    symbol,
    name,
    current_price,
    price_change_percentage_24h: price_change,
    total_volume,
    price_change_24h,
    id,
  },
  currency
}
) => {
  const currencySymbols = {
  usd: "$",
  eur: "€",
  jpy: "¥",
};
  return (
    <tr>
      <td>
        <div className={styles.symbol}>
          <img src={image} alt="" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>{currencySymbols[currency]}{current_price.toLocaleString()}</td>
      <td className={price_change > 0 ? styles.succsess : styles.error }>{price_change.toFixed(2)}%</td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change_24h > 0 ? chartUp : chartDown} alt={id} />
      </td>
    </tr>
  );
};
