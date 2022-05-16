import React from "react";
import { useMessageHook } from "../../Hooks/useMessageHook";
const BattleAnnouncer = ({ message }) => {
  const [typeMessage, setTypeMessage] = useMessageHook(message);
  return <div style={{ color: "white" }}>{typeMessage}</div>;
};

export default BattleAnnouncer;
