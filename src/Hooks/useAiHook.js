import React, { useState, useEffect } from "react";

export const useAi = (turn) => {
  const [aiChoes, setAiChoes] = useState("");

  useEffect(() => {
    if (turn === 1) {
      const option = ["Attack", "Magic", "Heal"];
      setAiChoes(option[Math.floor(Math.random() * option.length)]);
    } else {
      setAiChoes("playersTurn");
    }
  }, [turn]);

  return [aiChoes];
};
