// import { useContext } from "react";
// import { GamesContext } from "../hooks/GamesContext";
import { useGameStore } from "../store/useGameStore";

function Games() {
  // const gamesContext = useContext(GamesContext);

  // if (!gamesContext) {
  //     throw new Error("must be used inside of a Games Provider");
  // }

  const { games, meta } = useGameStore();

  return (
    <div className="w-3/4 mx-auto">
      <h1 className="mb-10">Games List</h1>

      <ul className="text-start">
        {games.map((game, game_index) => (
          <li className="mb-8" key={game_index}>
            <div className="flex justify-between items-center mb-3">
              <h2 className="mb-3 text-lg">
                Game No. {(meta.total as number) - game_index}
              </h2>

              <div className="flex gap-3">
                <button>Edit</button>
                <button className="bg-red-600 hover:border-white">Delete</button>
              </div>
            </div>
            <ul>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="">
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Name
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {game.players.map((player, i) => (
                    <tr key={i} className="">
                      <td className="border border-gray-300 px-4 py-2">
                        {player.name}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {player.score}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ul>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Games;
