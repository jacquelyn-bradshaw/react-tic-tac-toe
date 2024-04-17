import { useState } from "react";

export default function Player ({initialName, symbol, isActive}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditPlayer() {
    setIsEditing(editing => !editing);
  }

  function handlePlayerNameChange (event) {
    setPlayerName(event.target.value);
  }

  let playerNameText = <span className="player-name">{playerName}</span>

  if (isEditing) {
    playerNameText = <input type="text" required value={playerName} onChange={handlePlayerNameChange}/>
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameText}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditPlayer}>{isEditing ? "Save" : "Edit"} </button>
    </li>
  );
}
