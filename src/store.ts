import { create } from "zustand";

interface GamesStore {
    games: Game[];
    updateGames: (game: Game, update_type: string) => void;
}

export const gamesStore = create<GamesStore>((set) => ({
    games: [],
    updateGames: (game, update_type) => {
        switch (update_type) {
            case "add":
                set((state) => {
                    return {
                        games: [...state.games, game]
                    }
                })
                break;
            case 'delete':
                set(state => ({
                    games: state.games.splice(state.games.indexOf(game), 1)
                }))
                break;
        }
    }
}))