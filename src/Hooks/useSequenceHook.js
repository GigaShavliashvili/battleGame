import React, { useState, useEffect } from "react";
import { opponentStats, playerStats } from "../Shared/Characters";
import { wait } from "../Shared/Helper";
import { Attack, Magic, Heal } from "../Shared/Helper";
export const useSequenceHook = (Sequence) => {
  const [turn, setTurn] = useState(0);
  const [inSequence, setInSequence] = useState(false);
  const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth);
  const [aiHealth, setAiHealth] = useState(opponentStats.maxHealth);
  const [animationPlayer, setAnimationPlayer] = useState("static");
  const [animationAi, setAnimationAi] = useState("static");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const { turn, mode } = Sequence;
    /*  console.log(turn, mode); */
    if (mode) {
      const attacker = turn === 0 ? playerStats : opponentStats;
      const reciver = turn === 0 ? opponentStats : playerStats;
      switch (mode) {
        case "Attack": {
          const damage = Attack({ attacker, reciver });
          (async () => {
            setInSequence(true);

            setMessage(`${attacker.name} has chosen to attach!`);
            await wait(1000);

            turn === 0
              ? setAnimationPlayer("attack")
              : setAnimationAi("attack");
            await wait(100);

            turn === 0
              ? setAnimationPlayer("static")
              : setAnimationAi("static");

            await wait(500);
            turn === 0
              ? setAnimationAi("damage")
              : setAnimationPlayer("damage");

            await wait(760);
            turn === 0
              ? setAnimationAi("static")
              : setAnimationPlayer("static");

            setMessage(`${reciver.name} felt that!`);
            await wait(200);
            turn === 0
              ? setAiHealth((prev) => (prev > 0 ? prev - damage : 0))
              : setPlayerHealth((prev) => (prev > 0 ? prev - damage : 0));

            await wait(2000);

            setMessage(`now it's ${reciver.name} turn!`);
            await wait(1500);
            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();
          break;
        }
        case "Magic": {
          const damage = Magic({ attacker, reciver });
          (async () => {
            setInSequence(true);

            setMessage(`${attacker.name} has cast a spell!`);
            await wait(1000);

            turn === 0 ? setAnimationPlayer("magic") : setAnimationAi("magic");
            await wait(100);

            turn === 0
              ? setAnimationPlayer("static")
              : setAnimationAi("static");

            await wait(500);
            turn === 0
              ? setAnimationAi("damage")
              : setAnimationPlayer("damage");
            await wait(760);
            turn === 0
              ? setAnimationAi("static")
              : setAnimationPlayer("static");

            setMessage(`${reciver.name} doesn't know what hit them!`);

            turn === 0
              ? setAiHealth((prev) => (prev > 0 ? prev - damage : 0))
              : setPlayerHealth((prev) => (prev > 0 ? prev - damage : 0));

            await wait(2000);

            setMessage(`now it's ${reciver.name} turn!`);
            await wait(1500);
            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();
          break;
        }
        case "Heal": {
          const heal = Heal({ reciver: attacker });

          (async () => {
            setInSequence(true);

            setMessage(`${attacker.name} has chosen a heal!`);
            await wait(1000);
            turn === 0 ? setAnimationPlayer("magic") : setAnimationAi("magic");
            await wait(1000);

            turn === 0
              ? setAnimationPlayer("static")
              : setAnimationAi("static");
            await wait(500);
            setMessage(`${attacker.name} has recovered health!`);

            turn === 0
              ? setPlayerHealth((prev) =>
                  prev + heal <= playerStats.maxHealth
                    ? prev + heal
                    : playerStats.maxHealth
                )
              : setAiHealth((prev) =>
                  prev + heal <= opponentStats.maxHealth
                    ? prev + heal
                    : opponentStats.maxHealth
                );
            await wait(2000);
            setMessage(`now it's ${reciver.name} turn!`);
            await wait(1500);

            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();
          break;
        }
        default:
          break;
      }
    }
  }, [Sequence]);
  return [
    turn,
    inSequence,
    playerHealth,
    aiHealth,
    animationPlayer,
    animationAi,
    message,
  ];
};
