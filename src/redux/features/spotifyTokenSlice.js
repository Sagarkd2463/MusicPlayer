import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    expiresAt: null,
};

const spotifyTokenSlice = createSlice({
    name: 'spotifyToken',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload.token;
            state.expiresAt = action.payload.expiresAt;
        },
    },
});

export const { setToken } = spotifyTokenSlice.actions;
export default spotifyTokenSlice.reducer;
