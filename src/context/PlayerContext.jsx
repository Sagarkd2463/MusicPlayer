import { createContext, useContext, useReducer } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children, initialState, reducer }) => (
    <PlayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </PlayerContext.Provider>
);

export const usePlayerProvider = () => useContext(PlayerContext);

