interface Player {
    id: number;
    name: string;
    team_id: string;
    winner_count: number;
    screwed_count: number;
}

interface PlayerWithScore extends Player {
    score: number
}

type Game = {
    id: number;
    players: PlayerWithScore[];
};


interface GamesContextType {
    games: Game[];
    setGames: React.Dispatch<React.SetStateAction<Game[]>>;
}
