import { useState } from "react";
import SelectPlayers from "../components/create-game/SelectPlayers";
import StoreScores from "../components/create-game/StoreScores";

function Game() {
  const [isSelectingPlayers, setIsSelectingPlayers] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activePlayers, setActivePlayers] = useState<Player[]>([]);

  const getSelectedPlayersAndStart = (selectedPlayers: Player[]) => {
    setActivePlayers(selectedPlayers);

    if (selectedPlayers.length) {
      setIsSelectingPlayers(false);
      setIsPlaying(true);
    }

    console.log(activePlayers);
  };

  return (
    <div className="w-3/4 mx-auto">
      {/* first, select players */}
      {!isSelectingPlayers && !isPlaying && (
        <button onClick={() => setIsSelectingPlayers(true)}>
          Select Players
        </button>
      )}

      {isSelectingPlayers && (
        <SelectPlayers
          getSelectedPlayersAndStart={getSelectedPlayersAndStart}
        />
      )}

      {/* start the game: write scores and store */}
      {isPlaying && <StoreScores active_players={activePlayers} />}
    </div>
  );
}

export default Game;
