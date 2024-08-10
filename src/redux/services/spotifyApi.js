import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { encode as base64Encode } from 'base-64';

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const tokenUrl = 'https://accounts.spotify.com/api/token';

// Helper function to get the token
const getToken = async () => {
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
    return authData.access_token;
};

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: async (args, api, extraOptions) => {
        const token = await getToken();
        const baseQuery = fetchBaseQuery({
            baseUrl: 'https://api.spotify.com/v1',
            prepareHeaders: (headers) => {
                headers.set('Authorization', `Bearer ${token}`);
                return headers;
            },
        });
        return baseQuery(args, api, extraOptions);
    },
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => `/browse/new-releases`, keepUnusedDataFor: 60 }),
        getSongsByGenre: builder.query({ query: (genre) => `/recommendations?seed_genres=${genre}`, keepUnusedDataFor: 60 }),
        getSongDetails: builder.query({ query: ({ songid }) => `/tracks/${songid}`, keepUnusedDataFor: 60 }),
        getRelatedSongs: builder.query({ query: ({ songid }) => `/recommendations?seed_tracks=${songid}`, keepUnusedDataFor: 60 }),
        getArtistDetails: builder.query({ query: (artistId) => `/artists/${artistId}`, keepUnusedDataFor: 60 }),
        getSongsByCountry: builder.query({ query: (countryCode) => `/browse/new-releases?country=${countryCode}`, keepUnusedDataFor: 60 }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search?q=${searchTerm}&type=track,artist`, keepUnusedDataFor: 60 }),
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
