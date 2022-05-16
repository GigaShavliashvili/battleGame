import React, { useState } from "react";
import "./App.scss";

//Component
import { StartMode, BattleMode, EndMode } from "./Components";

const App = () => {
  const [mode, setMode] = useState("Start");
  const [winner, setWinner] = useState("");
  return (
    <div className="App">
      {mode === "Start" && (
        <StartMode
          onStartClick={() => {
            setMode("Battle");
          }}
        />
      )}
      {mode === "Battle" && (
        <BattleMode setWinner={setWinner} setMode={setMode} />
      )}
      {mode === "End" && <EndMode winner={winner} />}
    </div>
  );
};

export default App;
