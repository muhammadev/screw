interface Score {
    name: string;
    score: number;
}

type Game = {
    id: number;
    scores: Score[];
};


interface GamesContextType {
    games: Game[];
    setGames: React.Dispatch<React.SetStateAction<Game[]>>;
}
