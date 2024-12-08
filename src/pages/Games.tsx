// import { useContext } from "react";
// import { GamesContext } from "../hooks/GamesContext";
import { gamesStore } from "../store";

function Games() {
    // const gamesContext = useContext(GamesContext);

    // if (!gamesContext) {
    //     throw new Error("must be used inside of a Games Provider");
    // }

    const { games } = gamesStore();

    return (
        <div>
            <h1>Games List</h1>

            <ul>
                { games.map((game, game_index) => (
                    <div key={game_index}>
                        {
                            game.scores.map((score, i) => (
                                <li key={i}>
                                    name: {score.name}
                                    <br />
                                    score: {score.score}
                                </li>
                            ))
                        }
                        <hr />
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Games;