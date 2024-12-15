import { create } from "zustand";


interface PlayerStore {
    players: Player[];
    fetch: () => void;
    update: (type: string, player?: Player) => void;
}

export const usePlayerStore = create<PlayerStore>(set => ({
    players: [],
    async fetch() {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const response = await fetch(`${baseUrl}/players`);
        const data = await response.json();

        console.log({ data });

        set({ players: data })
    },
    update(status, player) {
        switch (status) {
            case "add":
                if (!player) {
                    throw new Error("must provide a player to add")
                }

                set(state => ({ players: [...state.players, player] }))
                break;
            case "delete":
                if (!player) {
                    throw new Error("must provide a player to add")
                }

                set(state => ({ players: state.players.splice(state.players.indexOf(player), 1) }))
        }
    }
}))

usePlayerStore.getState().fetch();