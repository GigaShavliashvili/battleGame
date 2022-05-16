import React from "react";
import styles from "./start.module.scss";
import { StartButton, GameButton } from "../Buttons/Button";

const StartMode = ({ onStartClick }) => {
  return (
    <div
      className={styles.Conteiner}
      style={{ backgroundImage: `url(/assets/sbg.gif)` }}
    >
      <StartButton callBack={onStartClick}>Start</StartButton>
    </div>
  );
};

export default StartMode;
