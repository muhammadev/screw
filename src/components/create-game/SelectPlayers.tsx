import { useState } from "react";
import { usePlayerStore } from "../../store/usePlayerStore";

function SelectPlayers({
  getSelectedPlayersAndStart,
}: {
  getSelectedPlayersAndStart: (selected_players: Player[]) => void;
}) {
  const { players } = usePlayerStore();

  // Store selected player IDs instead of player objects
  const [selectedPlayerIds, setSelectedPlayerIds] = useState<Set<number>>(
    new Set()
  );

  const handleCheckboxChange = (playerId: number) => {
    setSelectedPlayerIds((prev) => {
      const updatedSet = new Set(prev);
      if (updatedSet.has(playerId)) {
        updatedSet.delete(playerId);
      } else {
        updatedSet.add(playerId);
      }
      return updatedSet;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Map selected IDs back to Player objects
    const selectedPlayers = players.filter((player) =>
      selectedPlayerIds.has(player.id)
    );

    getSelectedPlayersAndStart(selectedPlayers);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Select Players</legend>
          {players.map((player) => (
            <div className="flex gap-4 text-xl" key={player.id}>
              <input
                type="checkbox"
                name="player"
                id={`player_${String(player.id)}`}
                checked={selectedPlayerIds.has(player.id)}
                onChange={() => handleCheckboxChange(player.id)}
              />
              <label htmlFor={`player_${String(player.id)}`}>{player.name}</label>
            </div>
          ))}
        </fieldset>

        <button type="submit" className="mt-12">
          Start
        </button>
      </form>
    </div>
  );
}

export default SelectPlayers;
