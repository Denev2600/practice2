import React, { useState } from "react";

export default function ScoreBoard() {
  const [player, setPlayer] = useState({
    firstName: "",
    lastName: "",
    score: 10,
  });

  const handlePlusClick = () => {
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  };

  const handleFirstNameChange = (e) => {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  };

  const handleLastNameChange = (e) => {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  };
  return (
    <div>
      <label>
        Score: <b> {player.score}</b>
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </div>
  );
}
