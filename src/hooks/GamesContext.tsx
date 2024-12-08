// import React, { createContext, useState, ReactNode } from 'react';

// interface GamesContextType {
//     games: Game[];
//     setGames: React.Dispatch<React.SetStateAction<Game[]>>;
// }

// export const GamesContext = createContext<GamesContextType | null>(null);

// interface GamesProviderProps {
//     children: ReactNode;
// }

// export const GamesProvider: React.FC<GamesProviderProps> = ({children}) => {
//     const [ games, setGames ] = useState<Game[]>([]);

//     return (
//         <GamesContext.Provider value={{ games, setGames }}>
//             {children}
//         </GamesContext.Provider>
//     );
// };