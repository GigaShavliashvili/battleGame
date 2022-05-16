import React, { useState, useEffect } from "react";

import styles from "./battle.module.scss";

//Components
import PlayerSummery from "../PlayerSummery/PlayerSummery";
import BattleMenu from "../BattleMenu/BattleMenu";

//Shared
import { opponentStats, playerStats } from "../../Shared/Characters";
import BattleAnnouncer from "../BattleAnnouncer/BattleAnnouncer";

//Hooks
import { useAi } from "../../Hooks/useAiHook";
import { useSequenceHook } from "../../Hooks/useSequenceHook";
const BattleMode = ({ setMode, setWinner }) => {
  const [sequence, setSequence] = useState("");

  const [
    turn,
    inSequence,
    playerHealth,
    aiHealth,
    animationPlayer,
    animationAi,
    message,
  ] = useSequenceHook(sequence);
  const [aichoes] = useAi(turn);

  useEffect(() => {
    if (aichoes && turn === 1 && !inSequence) {
      setSequence({ turn, mode: aichoes });
    }
  }, [turn, aichoes, inSequence]);

  useEffect(() => {
    if (playerHealth <= 0 || aiHealth <= 0) {
      setMode("End");
      setWinner(playerHealth > 0 ? playerStats.name : opponentStats.name);
    }
  }, [playerHealth, aiHealth]);
  /* 
  console.log(sequence); */
  return (
    <div
      className={styles.Container}
      style={{ backgroundImage: `url(/assets/bg.jpg)` }}
    >
      <div className={styles.Dashboard}>
        <PlayerSummery
          name={playerStats.name}
          maxHealth={playerStats.maxHealth}
          lvl={playerStats.level}
          Health={playerHealth}
        />
        <PlayerSummery
          AI
          name={opponentStats.name}
          maxHealth={opponentStats.maxHealth}
          lvl={opponentStats.level}
          Health={aiHealth}
        />
      </div>

      <div className={styles.Character}>
        <div className={(styles.PlayerCaracter, styles.playerSprite)}>
          <img
            src={playerStats.img}
            alt="PlayeImage"
            className={styles[animationPlayer]}
          />
        </div>
        <div className={styles.vs}>
          {playerStats.name} vs {opponentStats.name}
        </div>
        <div className={(styles.AIcharacter, styles.opponentSprite)}>
          <img
            src={opponentStats.img}
            alt="AiImage"
            className={styles[animationAi]}
          />
        </div>
      </div>
      <div className={styles.Control}>
        {!inSequence && turn === 0 ? (
          <BattleMenu
            onAttack={() => {
              setSequence({ turn, mode: "Attack" });
            }}
            onHeal={() => {
              setSequence({ turn, mode: "Heal" });
            }}
            onMegic={() => {
              setSequence({ turn, mode: "Magic" });
            }}
          />
        ) : (
          <h2 style={{ color: "red" }}>Wait your turn!</h2>
        )}

        <div className={styles.Message}>
          <BattleAnnouncer
            message={message || `what will ${playerStats.name} will do?`}
          />
        </div>
      </div>
    </div>
  );
};

export default BattleMode;
