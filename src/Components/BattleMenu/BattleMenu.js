import React from "react";
import { GameButton } from "../Buttons/Button";
const BattleMenu = ({ onAttack, onHeal, onMegic }) => {
  return (
    <div>
      <GameButton callBack={onAttack}>Attack</GameButton>
      <GameButton callBack={onHeal}>Heal</GameButton>
      <GameButton callBack={onMegic}>Magic</GameButton>
    </div>
  );
};

export default BattleMenu;
