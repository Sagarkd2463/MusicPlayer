import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { encode as base64Encode } from 'base-64';

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const tokenUrl = 'https://accounts.spotify.com/api/token';

let token = null;
let tokenExpirationTime = 0;

// Helper function to get the token
const getToken = async () => {
    const currentTime = new Date().getTime();

    // Check if the token is still valid
    if (token && currentTime < tokenExpirationTime) {
        return token;
    }

    // If the token is invalid or expired, fetch a new one
    const credentials = `${clientId}:${clientSecret}`;
    const encodedCredentials = base64Encode(credentials);

    const authResponse = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${encodedCredentials}`,
        },
        body: 'grant_type=client_credentials',
    });

    const authData = await authResponse.json();
    token = authData.access_token;
    tokenExpirationTime = currentTime + authData.expires_in * 1000; // expires_in is in seconds

    return token;
};

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spotify.com/v1',
        prepareHeaders: async (headers) => {
            const token = await getToken();
            headers.set('Authorization', `Bearer ${token}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: () => `/browse/new-releases`,
            keepUnusedDataFor: 60,
        }),
        getSongsByGenre: builder.query({
            query: (genreId) => `/recommendations?seed_genres=${genreId}`,
            keepUnusedDataFor: 60,
        }),
        getSongDetails: builder.query({
            query: ({ songid }) => `/tracks/${songid}`,
            keepUnusedDataFor: 60,
        }),
        getRelatedSongs: builder.query({
            query: ({ songid }) => `/recommendations?seed_tracks=${songid}`,
            keepUnusedDataFor: 60,
        }),
        getArtistDetails: builder.query({
            query: (artistId) => `/artists/${artistId}`,
            keepUnusedDataFor: 60,
        }),
        getSongsByCountry: builder.query({
            query: (countryCode) => `/browse/new-releases?country=${countryCode}`,
            keepUnusedDataFor: 60,
        }),
        getSongsBySearch: builder.query({
            query: (searchTerm) => `/search?q=${searchTerm}&type=track`,
            keepUnusedDataFor: 60,
        }),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongDetailsQuery,
    useGetRelatedSongsQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,
} = spotifyApi;