import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  console.log("PLAYER", isEditing);

  function handleEditClick() {
    // setIsEditing(isEditing ? false : true);

    //*** change state based on prevState ***/
    // setIsEditing(!isEditing); //--> schedules a state update to true
    // setIsEditing(!isEditing); //--> schedules a state update to true
    // setIsEditing((prevState) => !prevState); //--> guaranty update based on prevState
    // setIsEditing((prevState) => !prevState); //--> guaranty update based on prevState
    setIsEditing((prevState) => !prevState);
    if (isEditing) {
        onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
