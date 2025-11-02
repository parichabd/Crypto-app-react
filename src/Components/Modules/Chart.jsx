import { useState } from "react";
import { converDta } from "../../Helper/converDta";
import styles from "./chart.module.css";
function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  console.log(converDta(chart,type));
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
      <div className={styles.chart}></div>
    </div>
  );
}

export default Chart;
