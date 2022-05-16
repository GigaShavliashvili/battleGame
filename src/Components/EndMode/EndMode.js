import React from "react";
import { StartButton } from "../Buttons/Button";
import styles from "./end.module.scss";
const EndMode = ({ winner }) => {
  return (
    <div
      className={styles.Container}
      style={{ backgroundImage: `url(/assets/sbg.gif)` }}
    >
      <div className={styles.Content}>
        <h2>Winner is {winner}</h2>
        <StartButton
          callBack={() => {
            window.location.reload();
          }}
        >
          Restart
        </StartButton>
      </div>
    </div>
  );
};

export default EndMode;
