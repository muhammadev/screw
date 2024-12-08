import { FormEvent, useState } from 'react';
import '../App.css';
// import { GamesContext } from '../hooks/GamesContext.tsx';
import { gamesStore } from '../store.ts';

function Home() {
  const initialScores = [
    {
      name: 'Taka',
      score: 0,
    },
    {
      name: 'Anwar',
      score: 0,
    },
    {
      name: 'Saleh',
      score: 0,
    },
    {
      name: 'Hosni',
      score: 0,
    },
    {
      name: 'Sherif',
      score: 0,
    },
  ];

//   const gamesContext = useContext(GamesContext);


//   if (!gamesContext) {
//     throw new Error("GamesContext must be used within a GamesProvider")
//   }

  const { games, updateGames } = gamesStore();

  const [ scores, setScores ] = useState(initialScores);

  const handleNewScore = (newScore: number, index: number) => {
    setScores([
      ...scores.map((score, i) => {
        if (i === index) {
          score.score = newScore || 0;
          return score;
        } else {
          return score;
        }
      })
    ])
  }

  const addNewGame = (e: FormEvent) => {
    e.preventDefault();

    updateGames({id: games.length, scores: scores}, "add")
  }

  return (
    <div className="">
        <header className="App-header">
          Screw.. Who's gonna be screwed tonight?
        </header>

        <div>
          <code>
            {JSON.stringify(scores)}
          </code>
        </div>

        <div className='pt-4'>
          <form onSubmit={addNewGame}>
            {scores.map((player, i) => {
              return (
                <div className='flex justify-between mb-4' key={i}>
                  <label htmlFor={player.name}>{player.name}</label>
                  <input className='text-slate-950 border ms-2' type="text" id={player.name} onChange={e => handleNewScore(Number(e.target.value), i)} />
                </div>
              );
            })}

            <button type="submit" className='bg-sky-500 py-2 px-4 rounded'>Add</button>
          </form>
        </div>

        <hr />

        <code>
          {games.length}
        </code>
    </div>
  );
}

export default Home;
