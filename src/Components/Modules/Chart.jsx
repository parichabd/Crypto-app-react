import { useState } from "react";
import { converDta } from "../../Helper/converDta";
import styles from "./chart.module.css";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  console.log(converDta(chart, type));
  return (
    <div className={styles.container}>
      <span
        className={styles.cross}
        onClick={() => {
          setChart(null);
        }}
      >
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.name}>
          <img src={chart.coin.image} alt="" />
          <p>{chart.coin.name}</p>
        </div>
        <div className={styles.graph}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={400} height={400} data={converDta(chart, type)}>
              <Line
                trye="monotone"
                dataKey={type}
                stroke="#3874ff"
                strokeWidth="2px"
              />
              <CartesianGrid stroke="#404042" />
              <YAxis dataKey={type} domain={["auto", "auto"]} />
              <XAxis dataKey={type} hide />
              <Legend />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.types} >
          <button>Prices</button>
          <button>Market Cpas</button>
          <button>Total Volumes</button>
        </div>
        <div className={styles.details}>
          <div>
            <p>Prices : </p>
            <span>${chart.coin.ath }</span>
          </div>
          <div>
            <p>ATH : </p>
            <span>${chart.coin.current_price}</span>
          </div>
          <div>
            <p>Market Cap : </p>
            <span>{chart.coin.market_cap}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
