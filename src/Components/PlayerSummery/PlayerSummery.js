import React from "react";
import styles from "./player.module.scss";

//Coponents
import HealthBar from "../HealthBar/HealthBar";
import BattleMenu from "../BattleMenu/BattleMenu";
const PlayerSummery = ({ AI, name, maxHealth, Health, lvl }) => {
  return (
    <div
      className={styles.Container}
      style={{
        background: AI ? "rgb(180, 0, 10)" : "rgb(0, 30, 140)",
        padding: "0.5rem",
      }}
    >
      <div className={styles.Content}>
        <span>{name}</span>
        <span>LVL: {lvl}</span>
      </div>
      <div className={styles.HealthBar}>
        <HealthBar maxValue={maxHealth} value={Health} label={"HP"} />
      </div>
    </div>
  );
};

export default PlayerSummery;
