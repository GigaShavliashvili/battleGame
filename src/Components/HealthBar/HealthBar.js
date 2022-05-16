import React from "react";
import styles from "./health.module.scss";
const HealthBar = ({ maxValue, value, label }) => {
  return (
    <div className={styles.Conteiner}>
      <div className={styles.Label}>{label}</div>
      <div className={styles.Health}>
        <span
          className={styles.Health__Curr}
          style={{
            width: `${(value * 100) / maxValue}%`,
          }}
        ></span>
      </div>
    </div>
  );
};

export default HealthBar;
