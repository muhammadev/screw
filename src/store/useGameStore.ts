import { create } from "zustand";

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface GameResponse {
    current_page: number;
    data: Game[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

interface GameStore {
    isLoading: boolean;
    error: string | null;
    games: Game[];
    meta: Partial<GameResponse>;
    fetch: () => void;
    update: (status: string, game?: Game) => void;
}

const baseUrl = import.meta.env.VITE_BASE_URL;
export const useGameStore = create<GameStore>((set) => ({
    isLoading: false,
    error: null,
    games: [],
    meta: {},
    async fetch() {
        const response = await fetch(`${baseUrl}/games`);

        const data = await response.json();

        set({ meta: data, games: data.data })
    },
    update: async (status, game) => {
        switch (status) {
            case "add":
                if (!game) {
                    throw new Error("must provide a new game instance");
                }
                // ToDo: dispatch an api call to add the new game\
                fetch(`${baseUrl}/games`, {
                    method: "POST",
                    body: JSON.stringify(game),
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                }).then(res => res.json()).then(data => {
                    console.log({ data });
                })
                set((state) => {
                    return {
                        games: [...state.games, game]
                    }
                })
                break;
            case 'delete':
                if (!game) {
                    throw new Error("must provide the game to be deleted")
                }
                // ToDo: dispatch an api call to delete the game
                set(state => ({
                    games: state.games.filter(g => g.id !== game.id)
                }))
                break;
        }
    }
}))

useGameStore.getState().fetch();