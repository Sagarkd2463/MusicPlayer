import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './features/playerSlice';
import spotifyTokenReducer from './features/spotifyTokenSlice';
import { spotifyApi } from './services/spotifyApi';

export const store = configureStore({
    reducer: {
        [spotifyApi.reducerPath]: spotifyApi.reducer,
        player: playerReducer,
        spotifyToken: spotifyTokenReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(spotifyApi.middleware),
});