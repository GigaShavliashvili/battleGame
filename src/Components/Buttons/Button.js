import React from "react";
import styles from "./button.module.scss";
export const StartButton = ({ callBack, children }) => {
  return (
    <>
      <span className={styles.start__btn} onClick={callBack}>
        {children}
      </span>
    </>
  );
};

export const GameButton = ({ callBack, children }) => {
  return (
    <>
      <span className={styles.video__game__button} onClick={callBack}>
        {children}
      </span>
    </>
  );
};
