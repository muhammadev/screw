import { FormEvent, useEffect, useState } from "react";
import { useGameStore } from "../../store/useGameStore.ts";

function StoreScores({ active_players }: { active_players: Player[] }) {
  const { games, update: updateGameStore } = useGameStore();

  const [players, setPlayers] = useState<PlayerWithScore[]>([]);
  const handleNewScore = (newScore: number, player_id: number) => {
    const newPlayersArray = players.map((p) => {
      if (p.id === player_id) {
        p.score = newScore;
      }

      return p;
    });

    setPlayers(newPlayersArray);
  };

  useEffect(() => {
    const playersWithScores = active_players.map((p) => ({ ...p, score: 0 }));

    setPlayers(playersWithScores);
  }, [active_players]);

  const addNewGame = (e: FormEvent) => {
    e.preventDefault();

    // add new game to the store
    updateGameStore("add", { id: games.length, players: players });
  };

  return (
    <form onSubmit={addNewGame}>
      {players.map((player, i) => {
        return (
          <div className="flex justify-between mb-4" key={i}>
            <label htmlFor={player.name}>{player.name}</label>
            <input
              className="border ms-2"
              type="text"
              id={player.name}
              onChange={(e) =>
                handleNewScore(Number(e.target.value), player.id)
              }
            />
          </div>
        );
      })}

      <button type="submit">Add</button>
    </form>
  );
}

export default StoreScores;
