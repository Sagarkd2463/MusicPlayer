import React, { useEffect } from 'react';
import { usePlayerProvider } from '../context/PlayerContext';
import axios from 'axios';
import { reducerCases } from '../reducer/constants';
import '../styles/Playlists.css';

const Playlists = () => {

    const [{ token, playlists }, dispatch] = usePlayerProvider();

    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await axios.get(
                "https://api.spotify.com/v1/me/playlists",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                }
            );
            const { items } = response.data;
            const playlists = items.map(({ name, id }) => {
                return { name, id };
            });
            dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
        };
        getPlaylistData();
    }, [token, dispatch]);

    return (
        <div className='container'>
            <ul className='playlist-list'>
                {
                    playlists.map(({ name, id }) => {
                        return (
                            <li key={id}>{name}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Playlists;